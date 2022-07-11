import pkg from './package.json';
import { babel } from '@rollup/plugin-babel';
import pluginCommonjs from '@rollup/plugin-commonjs';
import pluginTypescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'es',
        sourcemap: 'inline',
        exports: 'named',
      },
    ],
    plugins: [
      pluginTypescript(),
      pluginCommonjs({ extensions: ['.js', '.ts'] }),
      babel({
        babelHelpers: 'bundled',
      }),
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.devDependencies || {})],
  },
];
