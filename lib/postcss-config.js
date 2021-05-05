const path = require('path');

module.exports = function (opt = {}) {
  let tw;
  if (typeof opt.tailwindcss === 'string') {
    tw = opt.tailwindcss;
  } else {
    delete require.cache[path.resolve(opt.tailwindcss.path)];
    tw = require(path.resolve(opt.tailwindcss.path));
    delete opt.tailwindcss.path;
    for (const k in opt.tailwindcss) tw[k] = opt.tailwindcss[k];
  }
  //
  return [
    !(opt['postcss-import'] === false) && require('postcss-import'),
    !(opt['postcss-mixins'] === false) && require('postcss-mixins'),
    !(opt['postcss-advanced-variables'] === false) && require('postcss-advanced-variables'),
    //
    require('tailwindcss')(tw),
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
    //!(opt.purge === false) && require('./postcss-plugin-purgecss')(opt.purge), //eslint-disable-line
    opt.mini && require('cssnano')({ preset: ['default', { mergeLonghand: false, cssDeclarationSorter: false }], ...opt.mini }),
  ];
};
