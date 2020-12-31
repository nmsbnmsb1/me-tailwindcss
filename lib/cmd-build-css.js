#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

//
let inputPath = '';
let outputPath = '';
let postcssPluginsPath = '';

for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === '--input') {
    inputPath = path.resolve(process.argv[i + 1]);
    i++;
  } else if (process.argv[i] === '--output') {
    outputPath = path.resolve(process.argv[i + 1]);
    i++;
  } else if (process.argv[i] === '--postcss') {
    postcssPluginsPath = path.resolve(process.argv[i + 1]);
    i++;
  }
}
// console.log(inputPath);
// console.log(outputPath);
// console.log(purge);
// console.log(mini);
if (!inputPath) return;
if (!outputPath) return;

// dependencies
let plugins;
if (!postcssPluginsPath) {
  plugins = require(path.resolve('./postcss.config')).plugins;
} else {
  plugins = require(postcssPluginsPath).plugins;
}

// css to be processed
const css = fs.readFileSync(inputPath, 'utf8');

module.exports = (function () {
  let postcssInstance = postcss();
  plugins.forEach((p) => {
    if (p) {
      // if (p.postcssPlugin === "tailwind" && tw) {
      //   // tailwind重新引用配置文件
      //   postcssInstance = postcssInstance.use(require("tailwindcss")(tw));
      //   //
      // } else if (p.postcssPlugin === "postcss-plugin-purgecss" && !purge) {
      //   //
      // } else if (p.postcssPlugin === "cssnano" && !mini) {
      //   //
      // } else {
      //   postcssInstance = postcssInstance.use(p);
      // }
      postcssInstance = postcssInstance.use(p);
    }
  });
  postcssInstance
    .process(css, {
      // `from` option is needed here
      from: inputPath,
    })
    .then(function (result) {
      let dirname = path.dirname(outputPath);
      if (!fs.existsSync(dirname)) fs.mkdirSync(dirname);
      fs.writeFile(outputPath, result.css, (err) => err && console.log(err));
      // console.log(path.resolve("./libs/me-ui.css"));
      if (result.map) {
        fs.writeFile(outputPath + '.map', result.map, (err) => err && console.log(err));
      }
    });
})();
