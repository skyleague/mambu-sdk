import { eitherToError } from '@skyleague/axioms'
import nock from 'nock'
import { afterEach, describe, expect, it } from 'vitest'
import type { streaming } from '../src/index.js'
import { MambuStreaming } from '../src/index.js'

const prefixUrl = 'http://www.example.com'

describe('streaming cient', () => {
    afterEach(() => {
        nock.cleanAll()
        nock.disableNetConnect()
    })

    const client = new MambuStreaming({
        prefixUrl: prefixUrl,
        auth: { apiKeyAuth: 'footoken' },
        defaultAuth: ['apiKeyAuth'],
    })

    it('gives valid response', async () => {
        const subscription: streaming.Subscription = {
            event_types: ['foo.bar'],
            owning_application: 'example-service',
        }
        nock('http://www.example.com').post('/subscriptions').reply(200, subscription)
        const result = await client.createSubscription({ body: subscription })
        expect(eitherToError(result)).toEqual(subscription)
    })
})
