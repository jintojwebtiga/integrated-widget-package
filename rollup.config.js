import babel from '@rollup/plugin-babel';

export default {
  input: 'src/widgets/index.jsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime'],
      exclude: 'node_modules/**'
    })
  ]
};