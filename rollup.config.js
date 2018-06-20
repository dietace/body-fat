import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.min.js',
    format: 'iife',
    name: 'bodyFat',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
};
