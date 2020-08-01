const path = require('path');
const fs = require('fs');

//
let inputPath = path.resolve('./dist');;
let prefix = 'tw-';
for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === '--input') {
    inputPath = path.resolve(process.argv[i + 1]);
    i++;
  } else if (process.argv[i] === '--prefix') {
    prefix = process.argv[i + 1];
    i++;
  }
}

//处理所有的文件
function doDir(dirPath) {
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
      doDir(fullPath);
      continue;
    }

    //如果是文件
    let content = fs.readFileSync(fullPath).toString();
    content = content.replace(new RegExp(prefix,'g'), '');
    fs.writeFileSync(fullPath, content);
    //console.log(`write: ${fullPath}`);
  }
}
doDir(path.resolve(inputPath));
console.log('clean done');
// let fullPath = path.resolve(rootPath, 'common', 'main.wxss');
// let content = fs.readFileSync(fullPath).toString();
// content = content.replace(/tw\-/g, '');
// fs.writeFileSync(fullPath, content);
// console.log(`write: ${fullPath}`);
