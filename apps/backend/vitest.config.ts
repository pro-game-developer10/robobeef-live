import { configDefaults, mergeConfig ,defineConfig } from 'vitest/config'
import swc from 'unplugin-swc'

export default mergeConfig(
    configDefaults,
    defineConfig({
        test: {
            root: '.',
            include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
            coverage: {
                enabled: true,
                provider: 'istanbul',
                reportsDirectory: './coverage',
            },
        },
        plugins: [
            swc.vite(),
            swc.rollup(),
            swc.esbuild()
        ]
    }),
);