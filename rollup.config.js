import { babel } from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/sparrow.js', // 对于node的支持
      format: 'cjs',
    },
    {
      file: 'esm/sparrow.js', // ES Module 为了支持浏览器
      format: 'es',
    },
    {
      file: 'dist/sparrow.min.js', // node和浏览器的混合模式
      name: 'sp',
      format: 'umd',
    },
  ],
  Plugins: [
    resolve(),
    babel(),
  ],
};
