const postcssPurgeCssPlugin = require('postcss-purgecss/lib/postcss-purgecss');
const { purgeTw, purgeVueTw } = require('./postcss-plugin-purgecss-extractor-tailwindcss');

let defaultOpts = {
  content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.ts', './src/**/*.js'],
  extractors: [purgeTw, purgeVueTw],
  whitelistPatterns: [/^is-[a-z]+$/m],
};

module.exports = (opts = {}) => {
  let finalOpts = { ...defaultOpts };
  for (let k in finalOpts) {
    if (opts[k]) {
      if (Array.isArray(finalOpts[k])) {
        finalOpts[k] = finalOpts[k].concat(opts[k]);
      } else finalOpts[k] = opts[k];
    }
  }
  //console.log(finalOpts);
  return postcssPurgeCssPlugin(finalOpts);
};
