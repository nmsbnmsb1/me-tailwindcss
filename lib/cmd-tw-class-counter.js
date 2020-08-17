#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
//
let cssPath = path.resolve('./tw-config.json');
let inputPath = path.resolve('./src');
let prefix = 'tw-';
for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === '--css') {
    cssPath = path.resolve(process.argv[i + 1]);
    i++;
  } else if (process.argv[i] === '--inputPath') {
    inputPath = path.resolve(process.argv[i + 1]);
    i++;
  } else if (process.argv[i] === '--prefix') {
    prefix = process.argv[i + 1];
    i++;
  }
}

//处理所有的文件
function doDir(classname, dirPath) {
  let total = 0;
  const files = fs.readdirSync(dirPath);
  for (const f of files) {
    if (f === '.DS_Store') continue;
    if (f.endsWith('.png')) continue;
    if (f.endsWith('.jpg')) continue;
    if (f.endsWith('.gif')) continue;

    //如果是文件夹
    const fullPath = path.resolve(dirPath, f);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      total += doDir(classname, fullPath);
      continue;
    }

    //如果是文件
    let content = fs.readFileSync(fullPath).toString();
    //content = content.replace(new RegExp(classname, 'g'), '');
    let position = 0;
    while (true) {
      let index = content.indexOf(classname, position);
      if (index < 0) break;
      position = index + classname.length + 1;
      total += 1;
    }
    //console.log(`write: ${fullPath}`);
  }
  return total;
}

// css to be processed
const css = fs.readFileSync(cssPath, 'utf8');
module.exports = (() => {
  let map = {};
  postcss()
    .use((root, result) => {
      root.walkRules((rule) => {
        let sel = rule.selector;
        if (!sel.startsWith('.') || sel.indexOf(prefix) < 0) return;
        let classname = sel.substring(1).replace(/\\/g, '');
        let count = doDir(classname, inputPath);
        if (count > 0) map[classname] = count;
      });
    })
    .process(css, {
      from: inputPath,
    })
    .then(() => {
      console.log(map);
    });
})();
