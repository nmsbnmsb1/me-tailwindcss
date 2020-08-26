//const path = require("path");

module.exports = function (opt = {}) {
  //opt.tw = opt.tw ? path.resolve(opt.tw) : path.join(__dirname, "/tw-config.js");
  // if (opt.purge === undefined) opt.purge = true;
  // if (!opt.purgeOptions) opt.purgeOptions = {};
  // if (opt.mini === undefined) opt.mini = false;
  //
  return [
    !(opt['postcss-import'] === false) && require('postcss-import'),
    opt.tw && require('tailwindcss')(opt.tw),

    // require("postcss-apply"),
    !(opt['postcss-mixins'] === false) && require('postcss-mixins'),
    !(opt['postcss-extend-rule'] === false) && require('postcss-extend-rule'),
    !(opt['postcss-advanced-variables'] === false) && require('postcss-advanced-variables'),
    !(opt['postcss-preset-env'] === false) &&
      require('postcss-preset-env')({
        stage: 0,
        preserve: true,
        ...opt['postcss-preset-env'],
        features: { 'nesting-rules': true, 'color-mod-function': true, ...opt['postcss-preset-env'].features },
      }),
    !(opt['postcss-property-lookup'] === false) && require('postcss-property-lookup'),
    //!(opt['postcss-nested'] === false) && require('postcss-nested'),
    //!(opt['postcss-color-mod-function'] === false) && require('postcss-color-mod-function'),

    // require("autoprefixer")
    // process.env.NODE_ENV === "development" ? null :
    !(opt.purge === false) && require('./postcss-plugin-purgecss')(opt.purge), //eslint-disable-line
    opt.mini && require('cssnano')({ preset: ['default', { mergeLonghand: false, cssDeclarationSorter: false }], ...opt.mini }),
  ];
};
