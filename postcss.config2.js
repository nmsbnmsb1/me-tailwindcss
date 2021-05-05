//process.env.NODE_ENV

//路径从项目根目录开始
module.exports = {
  plugins: [
    ...require('./lib/postcss-config')({
      //路径从项目根目录开始
      //tailwindcss: './styles/tailwind.config.js',
      tailwindcss: {
        path: './src/styles/tailwind.config.js',
      },
      //
      'postcss-preset-env': {
        stage: 4,
        preserve: false,
        features: {
          //'custom-properties': { preserve: false },
        },
      },
      mini: false,
    }),
  ],
};
