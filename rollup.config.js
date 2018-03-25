import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify"

const banner =
`/*
 * Ahoy.js
 * Simple, powerful JavaScript analytics
 * https://github.com/ankane/ahoy.js
 * v0.3.1
 * MIT License
 */
`

export default [
  {
    input: "src/index.js",
    output: {
      name: "ahoy",
      file: pkg.main,
      format: "umd",
      banner: banner
    },
    plugins: [
      resolve(),
      commonjs(),
      babel()
    ]
  },
  {
    input: "src/index.js",
    output: {
      name: "ahoy",
      file: "dist/ahoy.min.js",
      format: "umd"
    },
    plugins: [
      resolve(),
      commonjs(),
      babel(),
      uglify()
    ]
  },
  {
    input: "src/index.js",
    output: {
      file: pkg.module,
      format: "es",
      banner: banner
    },
    external: ["object-to-formdata"],
    plugins: [
      babel()
    ]
  }
];
