import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve"
import uglify from "rollup-plugin-uglify"

const env = process.env.NODE_ENV
const config = {
  input: "src/index.js",
  plugins: []
}

if (env === "es") {
  config.output = {format: env}
  config.external = ["object-to-formdata"]
  config.plugins.push(
    babel()
  )
}

if (env === "development" || env === "production") {
  config.output = {format: "umd", name: "ahoy"}
  config.plugins.push(
    nodeResolve({
      jsnext: true
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    })
  )
}

if (env === "production") {
  config.plugins.push(
    uglify()
  )
}

config.output.banner =
`/*
 * Ahoy.js
 * Simple, powerful JavaScript analytics
 * https://github.com/ankane/ahoy.js
 * v0.3.1
 * MIT License
 */
`

export default config
