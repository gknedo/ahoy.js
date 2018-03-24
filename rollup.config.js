import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve"
import uglify from "rollup-plugin-uglify"

const env = process.env.NODE_ENV
const config = {
  input: "src/ahoy.js",
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

export default config
