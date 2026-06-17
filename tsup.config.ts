import { writeFileSync } from 'node:fs'
import { generateDtsBundle } from 'dts-bundle-generator'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  splitting: false,
  sourcemap: false,
  clean: true,
  external: ['react', 'react-dom'],
  injectStyle: false,
  async onSuccess() {
    const [declarationBundle] = generateDtsBundle([
      {
        filePath: 'src/index.ts',
        output: { noBanner: true },
      },
    ])
    writeFileSync('dist/index.d.ts', declarationBundle)
    writeFileSync('dist/index.d.cts', declarationBundle)
  },
})
