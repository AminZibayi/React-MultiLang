/* In the Name of Allah */

import babel from 'rollup-plugin-babel';

export default {
  input : 'src/index.js',
  output : {
    file: 'index.js',
    format: 'cjs'
  },
  external: ["react"],
  plugins : [
    babel({exclude: 'node_modules/**'})
  ]
};