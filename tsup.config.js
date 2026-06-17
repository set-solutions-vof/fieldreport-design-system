/** @type {import('tsup').Options} */
export default {
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  external: ['react', 'react-dom'],
  injectStyle: false,
}
