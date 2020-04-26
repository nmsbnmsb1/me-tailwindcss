module.exports = {
  plugins: [
    ...require('./lib/postcss-config')({
      //路径从项目根目录开始
      tw: './styles/tw.config.js',
      //路径从项目根目录开始
      purge: {
        //add new path
        content: ['./examples/**/*.vue', './examples/**/*.ts', './examples/**/*.js'],
        //add new extractors
      },
      mini: false,
    }),
  ],
};
