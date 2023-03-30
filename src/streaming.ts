import { BaseMambuStreaming } from './base-streaming.client.js'
import { SubscriptionEventStreamBatch } from './base-streaming.type.js'

import AjvValidator from 'ajv'
import split2 from 'split2'

import https from 'node:https'
import { PassThrough } from 'node:stream'

export class MambuStreaming extends BaseMambuStreaming {
    public async *getSubscriptionEventBatches({
        path,
        query,
        headers,
    }: {
        path: { subscriptionId: string }
        query?: {
            max_uncommitted_events?: string
            batch_limit?: string
            stream_limit?: string
            batch_flush_timeout?: string
            stream_timeout?: string
            stream_keep_alive_limit?: string
            commit_timeout?: string
        }
        headers?: { ['X-Flow-Id']?: string; apikey?: string }
    }) {
        const apiKey = typeof this.auth.apiKeyAuth === 'string' ? this.auth.apiKeyAuth : await this.auth.apiKeyAuth?.()
        const stream = new PassThrough()
        const url = new URL(`${this.client.defaults.options.prefixUrl.toString()}subscriptions/${path.subscriptionId}/events`)
        for (const [k, v] of Object.entries(query ?? {})) {
            url.searchParams.set(k, v)
        }
        let streamId = ''
        const response = new Promise<void>((resolve, reject) => {
            const req = https.get(
                url,
                {
                    headers: {
                        apiKey,
                        ...headers,
                    },
                },
                (res) => {
                    streamId = res.headers['x-mambu-streamid'] as string
                    res.on('data', (chunk) => stream.write(chunk))
                    res.on('end', resolve)
                    res.on('error', reject)
                }
            )
            req.on('error', reject)
        })
        response.finally(() => stream.end())

        for await (const chunk of stream.pipe(split2())) {
            const batch = JSON.parse((chunk as Buffer).toString()) as unknown

            if (SubscriptionEventStreamBatch.is(batch)) {
                yield { batch: batch, streamId }
            } else {
                throw new AjvValidator.ValidationError(SubscriptionEventStreamBatch.validate.errors ?? [])
            }
        }
        await response
    }
}
