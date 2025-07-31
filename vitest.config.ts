import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        setupFiles: ['./test/__test__/setup.ts'],
        coverage: {
            reportsDirectory: './.coverage',
        },
        fakeTimers: {
            now: new Date(2022, 1, 10).getTime(),
        },
    },
})
