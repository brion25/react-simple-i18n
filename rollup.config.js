const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");

module.exports = {
  input: "src/index.js",
  output: {
    file: "lib/index.js",
    format: "cjs",
  },
  external: [
    'react',
    'prop-types'
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: '**/node_modules/**'
    })
  ]
}
