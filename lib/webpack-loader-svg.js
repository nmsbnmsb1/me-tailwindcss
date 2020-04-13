const chainWebpack = function(config) {
  //svg
  const svgRule = config.module.rule("svg");
  // 清除已有的所有 loader。
  // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
  svgRule.uses.clear();
  // 添加要替换的 loader
  svgRule
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .tap(options => {
      return {
        symbolId: "icon-[name]"
      };
    });

  // set svg-sprite-loader
  // config.module
  //   .rule('svg')
  //   .exclude.add(resolve('src/icons'))
  //   .end()
  // config.module
  //   .rule('icons')
  //   .test(/\.svg$/)
  //   .include.add(resolve('src/icons'))
  //   .end()
  //   .use('svg-sprite-loader')
  //   .loader('svg-sprite-loader')
  //   .options({
  //     symbolId: 'icon-[name]'
  //   })
  //   .end()
};

module.exports = {
  chainWebpack
};
