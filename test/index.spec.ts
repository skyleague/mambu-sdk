import { MambuStreaming } from '../src/index.js'
import type { streaming } from '../src/index.js'

import { eitherToError } from '@skyleague/axioms'
import nock from 'nock'

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

    test('gives valid response', async () => {
        const subscription: streaming.Subscription = {
            event_types: ['foo.bar'],
            owning_application: 'example-service',
        }
        nock('http://www.example.com').post('/subscriptions').reply(200, subscription)
        const result = await client.createSubscription({ body: subscription })
        expect(eitherToError(result)).toEqual(subscription)
    })
})
