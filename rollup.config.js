// rollup.config.js
// Configuration options for Rollup. 
// See: https://rollupjs.org/guide/en/

import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  },
  plugins: [
    postcss()
  ]
};
