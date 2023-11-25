import { configDefaults, mergeConfig ,defineConfig } from 'vitest/config'

export default mergeConfig(
    configDefaults,
    defineConfig({
        test: {
            root: '.',
            include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
            coverage: {
                enabled: true,
                provider: 'istanbul',
                reportsDirectory: './coverage'
            },
        },
    }),
);