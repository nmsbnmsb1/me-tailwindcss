module.exports = {
  plugins: [
    ...require('./lib/postcss-config')({
      //路径从项目根目录开始
      tw: './styles/tailwind.config.js',
      'postcss-preset-env': {
        stage: 0,
        preserve: false,
        features: {
          //'custom-properties': { preserve: false },
        },
      },
      //路径从项目根目录开始
      purge: false,
      // purge: {
      //   //add new path
      //   content: ['./examples/**/*.vue', './examples/**/*.ts', './examples/**/*.js'],
      //   //add new extractors
      // },
      mini: false,
    }),
  ],
};
