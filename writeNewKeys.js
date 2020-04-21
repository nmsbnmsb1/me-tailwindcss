const path = require('path');
const fs = require('fs');
let config = require('tailwindcss/stubs/defaultConfig.stub');
let code = fs.readFileSync(path.resolve('./lib/index.js')).toString();

//替换基本的keys
{
  const keys = {};
  for (let k in config.theme) keys[k] = k;
  let startMark = 'utils.keys = ';
  let startIndex = code.indexOf(startMark) + startMark.length;
  let endIndex = code.indexOf('}', startIndex) + 1;
  code = `${code.substring(0, startIndex)}${JSON.stringify(keys, undefined, 4)}${code.substring(endIndex)}`;
}

//替换variants keys
{
  const keys = {};
  for (let k in config.variants) keys[k] = k;
  let startMark = 'utils.variantsKeys = ';
  let startIndex = code.indexOf(startMark) + startMark.length;
  let endIndex = code.indexOf('}', startIndex) + 1;
  code = `${code.substring(0, startIndex)}${JSON.stringify(keys, undefined, 4)}${code.substring(endIndex)}`;
}

//替换 corePlugins keys
{
  const keys = {};
  {
    let corePlugins = require('tailwindcss/lib/corePlugins');
    let defined = corePlugins.default.toString();
    let mark = 'return (0, _configurePlugins.default)(corePluginConfig, {';
    let markIndex = defined.indexOf(mark) + mark.length;
    defined = defined.substring(markIndex, defined.indexOf('}', markIndex));
    let arr = defined.split(',');
    for (let k of arr) {
      let kk = k.split(':')[0].trim();
      keys[kk] = kk;
    }
    //console.log(keys);
  }
  let startMark = 'utils.corePluginsKeys = ';
  let startIndex = code.indexOf(startMark) + startMark.length;
  let endIndex = code.indexOf('}', startIndex) + 1;
  code = `${code.substring(0, startIndex)}${JSON.stringify(keys, undefined, 4)}${code.substring(endIndex)}`;
}

//替换 var keys
{
  let str = '';
  for (let k in config.theme) {
    str += `    [utils.keys.${k}]: '${k.replace(/([A-Z])/g, '-$1').toLowerCase()}',\n`;
  }
  str = str.substring(0, str.length - 1);
  //
  let startMark = 'utils.varKeys = {';
  let startIndex = code.indexOf(startMark) + startMark.length;
  let endIndex = code.indexOf('}', startIndex);
  code = `${code.substring(0, startIndex)}${str}${code.substring(endIndex)}`;
}

fs.writeFileSync(path.resolve('./lib/index.js'), code);
