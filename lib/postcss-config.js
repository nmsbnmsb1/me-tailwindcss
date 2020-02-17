//const path = require("path");

module.exports = function(opt = {}) {
  //opt.tw = opt.tw ? path.resolve(opt.tw) : path.join(__dirname, "/tw-config.js");
  if (opt.purge === undefined) opt.purge = true;
  if (!opt.purgeOptions) opt.purgeOptions = {};
  if (opt.mini === undefined) opt.mini = false;
  //
  return [
    require('postcss-import'),
    require('tailwindcss')(opt.tw),
    // require("postcss-apply"),
    // like precss
    require('postcss-mixins'),
    require('postcss-extend-rule'),
    require('postcss-advanced-variables'),
    require('postcss-preset-env')({
      stage: 0,
      preserve: true,
    }),
    require('postcss-property-lookup'),
    require('postcss-nested'),
    //
    require('postcss-color-mod-function'),
    // require("autoprefixer")
    // process.env.NODE_ENV === "development" ? null :
    opt.purge && require('./postcss-plugin-purgecss').postcssPlugin(opt.purgeOptions), //eslint-disable-line
    opt.mini &&
      require('cssnano')(
        opt.miniOptions || {
          preset: [
            'default',
            {
              mergeLonghand: false,
              cssDeclarationSorter: false,
            },
          ],
        }
      ),
  ];
};
