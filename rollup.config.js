import peerDepsExternal from "rollup-plugin-peer-deps-external";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import packageJson from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    nodeResolve(),
    commonjs(),
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
  ],
};
