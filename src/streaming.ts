import https from 'node:https'
import { PassThrough } from 'node:stream'
import { ValidationError } from 'ajv'
import type {} from 'ky'
import split2 from 'split2'
import { BaseMambuStreaming } from './base-streaming.client.js'
import { SubscriptionEventStreamBatch } from './base-streaming.zod.js'

export class MambuStreaming extends BaseMambuStreaming {
    public prefixUrl: string | undefined

    public constructor(params: ConstructorParameters<typeof BaseMambuStreaming>[0]) {
        super(params)

        this.prefixUrl = params.prefixUrl
    }

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
        headers?: { 'X-Flow-Id'?: string; apikey?: string }
    }) {
        const apiKey = typeof this.auth.apiKeyAuth === 'string' ? this.auth.apiKeyAuth : await this.auth.apiKeyAuth?.()
        const stream = new PassThrough()
        const url = new URL(`${this.prefixUrl}subscriptions/${path.subscriptionId}/events`)
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
                },
            )
            req.on('error', reject)
        })
        void response.finally(() => stream.end())

        for await (const chunk of stream.pipe(split2())) {
            const batch = JSON.parse((chunk as Buffer).toString()) as unknown

            const result = SubscriptionEventStreamBatch.safeParse(batch)
            if (result.success && typeof batch === 'object' && batch !== null) {
                yield { batch: Object.assign(batch, result.data) satisfies SubscriptionEventStreamBatch, streamId }
            } else {
                throw new ValidationError(
                    result.error?.issues.map((issue) => ({
                        message: issue.message,
                        params: issue.path,
                        schemaPath: issue.path.join('/'),
                    })) ?? [],
                )
            }
        }
        await response
    }
}
