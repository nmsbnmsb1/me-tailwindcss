const path = require('path');
const fs = require('fs');
let config = require('tailwindcss/stubs/defaultConfig.stub');
let code = fs.readFileSync(path.resolve('./lib/index.js')).toString();

//替换基本的keys
{
  const keys = {};
  for (const k in config.theme) keys[k] = k;
  //
  const startMark = 'utils.keys = ';
  const startIndex = code.indexOf(startMark) + startMark.length;
  const endIndex = code.indexOf('}', startIndex) + 1;
  code = `${code.substring(0, startIndex)}${JSON.stringify(keys, undefined, 4)}${code.substring(endIndex)}`;
}
//替换 ColorKeys
{
  const keys = [];
  for (const k in config.theme) {
    if (k.toLowerCase().indexOf('color') >= 0) keys.push(`utils.keys.${k}`);
  }
  //
  const startMark = 'utils.colorKeys = ';
  const startIndex = code.indexOf(startMark) + startMark.length;
  const endIndex = code.indexOf(']', startIndex) + 1;
  code = `${code.substring(0, startIndex)}[${keys.join(',')}]${code.substring(endIndex)}`;
}
//替换 opacity
{
  const keys = [];
  for (const k in config.theme) {
    if (k.toLowerCase().indexOf('opacity') >= 0) keys.push(`utils.keys.${k}`);
  }
  //
  const startMark = 'utils.opacityKeys = ';
  const startIndex = code.indexOf(startMark) + startMark.length;
  const endIndex = code.indexOf(']', startIndex) + 1;
  code = `${code.substring(0, startIndex)}[${keys.join(',')}]${code.substring(endIndex)}`;
}

//替换 variants keys
{
  const keys = {};
  for (const k in config.variants) keys[k] = k;
  //
  let startMark = 'utils.variantsKeys = ';
  let startIndex = code.indexOf(startMark) + startMark.length;
  let endIndex = code.indexOf('}', startIndex) + 1;
  code = `${code.substring(0, startIndex)}${JSON.stringify(keys, undefined, 4)}${code.substring(endIndex)}`;
}
//替换 variantsValues
{
  const keys = {};
  for (const k of config.variantOrder) keys[k] = k;
  //
  const startMark = 'utils.variantsValues = ';
  const startIndex = code.indexOf(startMark) + startMark.length;
  const endIndex = code.indexOf('}', startIndex) + 1;
  code = `${code.substring(0, startIndex)}${JSON.stringify(keys, undefined, 4)}${code.substring(endIndex)}`;
}

//替换 corePlugins keys
{
  const keys = {};
  for (const pn of require('tailwindcss/lib/corePluginList').corePluginList) keys[pn] = pn;
  //
  let startMark = 'utils.corePluginsKeys = ';
  let startIndex = code.indexOf(startMark) + startMark.length;
  let endIndex = code.indexOf('}', startIndex) + 1;
  code = `${code.substring(0, startIndex)}${JSON.stringify(keys, undefined, 4)}${code.substring(endIndex)}`;
}

//替换 var keys
{
  let str = '';
  for (let k in config.theme) {
    let val = `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    if (k === 'textColor') val = 'text';
    else if (k === 'borderColor') val = 'border';
    else if (k === 'backgroundColor') val = 'bg';
    else if (k.startsWith('background')) val = val.replace('background', 'bg');
    str += `    [utils.keys.${k}]: '${val}',\n`;
  }
  str = str.substring(0, str.length - 1);
  //
  let startMark = 'utils.varKeys = {';
  let startIndex = code.indexOf(startMark) + startMark.length;
  let endIndex = code.indexOf('}', startIndex);
  code = `${code.substring(0, startIndex)}${str}${code.substring(endIndex)}`;
}

fs.writeFileSync(path.resolve('./lib/index.js'), code);
