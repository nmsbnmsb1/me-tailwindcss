module.exports = {
  plugins: [
    ...require('./lib/postcss-config')({
      //路径从项目根目录开始
      //tw: './styles/tailwind.config.js',
      tw: {
        path: './styles/tailwind.config2.js',
        //purge: { enabled: false },
      },
      //
      'postcss-preset-env': {
        stage: 4,
        preserve: false,
        features: {
          //'custom-properties': { preserve: false },
        },
      },
      //路径从项目根目录开始
      purge: false,
      mini: false,
    }),
  ],
};
