#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

//
let inputPath = '';
let outputPath = path.resolve('./tw-config.json');
for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === '--input') {
    inputPath = path.resolve(process.argv[i + 1]);
    i++;
  } else if (process.argv[i] === '--output') {
    outputPath = path.resolve(process.argv[i + 1]);
    i++;
  }
}
if (!inputPath) return;

const config = require(inputPath);
// 一些特殊值的打印
// if (config.plugins) {
//   config.plugins.forEach(p => {
//     try {
//       p(config);
//     } catch (err) {
//       // console.log('dai si', err);
//     }
//   });
// }
//
fs.writeFileSync(outputPath, JSON.stringify(config, null, '\t'));
