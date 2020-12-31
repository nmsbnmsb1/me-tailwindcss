const path = require('path');

module.exports = function (opt = {}) {
  let twconfig;
  if (typeof opt.tw === 'string') {
    twconfig = opt.tw;
  } else {
    twconfig = require(path.resolve(opt.tw.path));
    delete opt.tw.path;
    for (const k in opt.tw) twconfig[k] = opt.tw[k];
  }
  //
  return [
    !(opt['postcss-import'] === false) && require('postcss-import'),
    !(opt['postcss-mixins'] === false) && require('postcss-mixins'),
    !(opt['postcss-advanced-variables'] === false) && require('postcss-advanced-variables'),
    //
    require('tailwindcss')(twconfig),
    //
    !(opt['postcss-preset-env'] === false) &&
      require('postcss-preset-env')({
        stage: 0,
        preserve: true,
        ...opt['postcss-preset-env'],
        features: { 'nesting-rules': true, 'color-mod-function': true, ...(opt['postcss-preset-env'] || {}).features },
      }),
    //
    // require("autoprefixer")
    !(opt.purge === false) && require('./postcss-plugin-purgecss')(opt.purge), //eslint-disable-line
    //
    opt.mini && require('cssnano')({ preset: ['default', { mergeLonghand: false, cssDeclarationSorter: false }], ...opt.mini }),
  ];
};
