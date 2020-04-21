const path = require('path');
const fs = require('fs');

const utils = {};
module.exports = utils;

utils.config = undefined;
utils.theme = '';

// Base----------------------------------------------------------------------------------------------------------------
utils.keys = {
  screens: 'screens',
  colors: 'colors',
  spacing: 'spacing',
  backgroundColor: 'backgroundColor',
  backgroundPosition: 'backgroundPosition',
  backgroundSize: 'backgroundSize',
  borderColor: 'borderColor',
  borderRadius: 'borderRadius',
  borderWidth: 'borderWidth',
  boxShadow: 'boxShadow',
  container: 'container',
  cursor: 'cursor',
  divideColor: 'divideColor',
  divideWidth: 'divideWidth',
  fill: 'fill',
  flex: 'flex',
  flexGrow: 'flexGrow',
  flexShrink: 'flexShrink',
  fontFamily: 'fontFamily',
  fontSize: 'fontSize',
  fontWeight: 'fontWeight',
  height: 'height',
  inset: 'inset',
  letterSpacing: 'letterSpacing',
  lineHeight: 'lineHeight',
  listStyleType: 'listStyleType',
  margin: 'margin',
  maxHeight: 'maxHeight',
  maxWidth: 'maxWidth',
  minHeight: 'minHeight',
  minWidth: 'minWidth',
  objectPosition: 'objectPosition',
  opacity: 'opacity',
  order: 'order',
  padding: 'padding',
  placeholderColor: 'placeholderColor',
  space: 'space',
  stroke: 'stroke',
  strokeWidth: 'strokeWidth',
  textColor: 'textColor',
  width: 'width',
  zIndex: 'zIndex',
  gap: 'gap',
  gridTemplateColumns: 'gridTemplateColumns',
  gridColumn: 'gridColumn',
  gridColumnStart: 'gridColumnStart',
  gridColumnEnd: 'gridColumnEnd',
  gridTemplateRows: 'gridTemplateRows',
  gridRow: 'gridRow',
  gridRowStart: 'gridRowStart',
  gridRowEnd: 'gridRowEnd',
  transformOrigin: 'transformOrigin',
  scale: 'scale',
  rotate: 'rotate',
  translate: 'translate',
  skew: 'skew',
  transitionProperty: 'transitionProperty',
  transitionTimingFunction: 'transitionTimingFunction',
  transitionDuration: 'transitionDuration',
  transitionDelay: 'transitionDelay',
};
utils.colorKeys = [utils.keys.colors, utils.keys.textColor, utils.keys.borderColor, utils.keys.backgroundColor];
utils.spacingKeys = [
  utils.keys.spacing,
  utils.keys.width,
  utils.keys.height,
  utils.keys.minWidth,
  utils.keys.minHeight,
  utils.keys.maxWidth,
  utils.keys.maxHeight,
  utils.keys.padding,
  utils.keys.margin,
];
utils.variantsKeys = {
  accessibility: 'accessibility',
  alignContent: 'alignContent',
  alignItems: 'alignItems',
  alignSelf: 'alignSelf',
  appearance: 'appearance',
  backgroundAttachment: 'backgroundAttachment',
  backgroundColor: 'backgroundColor',
  backgroundPosition: 'backgroundPosition',
  backgroundRepeat: 'backgroundRepeat',
  backgroundSize: 'backgroundSize',
  borderCollapse: 'borderCollapse',
  borderColor: 'borderColor',
  borderRadius: 'borderRadius',
  borderStyle: 'borderStyle',
  borderWidth: 'borderWidth',
  boxShadow: 'boxShadow',
  boxSizing: 'boxSizing',
  cursor: 'cursor',
  display: 'display',
  fill: 'fill',
  flex: 'flex',
  flexDirection: 'flexDirection',
  flexGrow: 'flexGrow',
  flexShrink: 'flexShrink',
  flexWrap: 'flexWrap',
  float: 'float',
  clear: 'clear',
  fontFamily: 'fontFamily',
  fontSize: 'fontSize',
  fontSmoothing: 'fontSmoothing',
  fontStyle: 'fontStyle',
  fontWeight: 'fontWeight',
  height: 'height',
  inset: 'inset',
  justifyContent: 'justifyContent',
  letterSpacing: 'letterSpacing',
  lineHeight: 'lineHeight',
  listStylePosition: 'listStylePosition',
  listStyleType: 'listStyleType',
  margin: 'margin',
  maxHeight: 'maxHeight',
  maxWidth: 'maxWidth',
  minHeight: 'minHeight',
  minWidth: 'minWidth',
  objectFit: 'objectFit',
  objectPosition: 'objectPosition',
  opacity: 'opacity',
  order: 'order',
  outline: 'outline',
  overflow: 'overflow',
  padding: 'padding',
  placeholderColor: 'placeholderColor',
  pointerEvents: 'pointerEvents',
  position: 'position',
  resize: 'resize',
  stroke: 'stroke',
  strokeWidth: 'strokeWidth',
  tableLayout: 'tableLayout',
  textAlign: 'textAlign',
  textColor: 'textColor',
  textDecoration: 'textDecoration',
  textTransform: 'textTransform',
  userSelect: 'userSelect',
  verticalAlign: 'verticalAlign',
  visibility: 'visibility',
  whitespace: 'whitespace',
  width: 'width',
  wordBreak: 'wordBreak',
  zIndex: 'zIndex',
  gap: 'gap',
  gridAutoFlow: 'gridAutoFlow',
  gridTemplateColumns: 'gridTemplateColumns',
  gridColumn: 'gridColumn',
  gridColumnStart: 'gridColumnStart',
  gridColumnEnd: 'gridColumnEnd',
  gridTemplateRows: 'gridTemplateRows',
  gridRow: 'gridRow',
  gridRowStart: 'gridRowStart',
  gridRowEnd: 'gridRowEnd',
  transform: 'transform',
  transformOrigin: 'transformOrigin',
  scale: 'scale',
  rotate: 'rotate',
  translate: 'translate',
  skew: 'skew',
  transitionProperty: 'transitionProperty',
  transitionTimingFunction: 'transitionTimingFunction',
  transitionDuration: 'transitionDuration',
  transitionDelay: 'transitionDelay',
};
utils.variantsValues = {
  responsive: 'responsive',
  hover: 'hover',
  focus: 'focus',
  active: 'active',
  'focus-within': 'focus-within',
  'group-hover': 'group-hover',
  'group-focus': 'group-focus',
};
utils.corePluginsKeys = {
  preflight: 'preflight',
  container: 'container',
  space: 'space',
  divideWidth: 'divideWidth',
  divideColor: 'divideColor',
  accessibility: 'accessibility',
  appearance: 'appearance',
  backgroundAttachment: 'backgroundAttachment',
  backgroundColor: 'backgroundColor',
  backgroundPosition: 'backgroundPosition',
  backgroundRepeat: 'backgroundRepeat',
  backgroundSize: 'backgroundSize',
  borderCollapse: 'borderCollapse',
  borderColor: 'borderColor',
  borderRadius: 'borderRadius',
  borderStyle: 'borderStyle',
  borderWidth: 'borderWidth',
  boxSizing: 'boxSizing',
  cursor: 'cursor',
  display: 'display',
  flexDirection: 'flexDirection',
  flexWrap: 'flexWrap',
  alignItems: 'alignItems',
  alignSelf: 'alignSelf',
  justifyContent: 'justifyContent',
  alignContent: 'alignContent',
  flex: 'flex',
  flexGrow: 'flexGrow',
  flexShrink: 'flexShrink',
  order: 'order',
  float: 'float',
  clear: 'clear',
  fontFamily: 'fontFamily',
  fontWeight: 'fontWeight',
  height: 'height',
  fontSize: 'fontSize',
  lineHeight: 'lineHeight',
  listStylePosition: 'listStylePosition',
  listStyleType: 'listStyleType',
  margin: 'margin',
  maxHeight: 'maxHeight',
  maxWidth: 'maxWidth',
  minHeight: 'minHeight',
  minWidth: 'minWidth',
  objectFit: 'objectFit',
  objectPosition: 'objectPosition',
  opacity: 'opacity',
  outline: 'outline',
  overflow: 'overflow',
  padding: 'padding',
  placeholderColor: 'placeholderColor',
  pointerEvents: 'pointerEvents',
  position: 'position',
  inset: 'inset',
  resize: 'resize',
  boxShadow: 'boxShadow',
  fill: 'fill',
  stroke: 'stroke',
  strokeWidth: 'strokeWidth',
  tableLayout: 'tableLayout',
  textAlign: 'textAlign',
  textColor: 'textColor',
  fontStyle: 'fontStyle',
  textTransform: 'textTransform',
  textDecoration: 'textDecoration',
  fontSmoothing: 'fontSmoothing',
  letterSpacing: 'letterSpacing',
  userSelect: 'userSelect',
  verticalAlign: 'verticalAlign',
  visibility: 'visibility',
  whitespace: 'whitespace',
  wordBreak: 'wordBreak',
  width: 'width',
  zIndex: 'zIndex',
  gap: 'gap',
  gridAutoFlow: 'gridAutoFlow',
  gridTemplateColumns: 'gridTemplateColumns',
  gridColumn: 'gridColumn',
  gridColumnStart: 'gridColumnStart',
  gridColumnEnd: 'gridColumnEnd',
  gridTemplateRows: 'gridTemplateRows',
  gridRow: 'gridRow',
  gridRowStart: 'gridRowStart',
  gridRowEnd: 'gridRowEnd',
  transform: 'transform',
  transformOrigin: 'transformOrigin',
  scale: 'scale',
  rotate: 'rotate',
  translate: 'translate',
  skew: 'skew',
  transitionProperty: 'transitionProperty',
  transitionTimingFunction: 'transitionTimingFunction',
  transitionDuration: 'transitionDuration',
  transitionDelay: 'transitionDelay',
};
utils.varKeys = {
  [utils.keys.screens]: 'screens',
  [utils.keys.colors]: 'colors',
  [utils.keys.spacing]: 'spacing',
  [utils.keys.backgroundColor]: 'background-color',
  [utils.keys.backgroundPosition]: 'background-position',
  [utils.keys.backgroundSize]: 'background-size',
  [utils.keys.borderColor]: 'border-color',
  [utils.keys.borderRadius]: 'border-radius',
  [utils.keys.borderWidth]: 'border-width',
  [utils.keys.boxShadow]: 'box-shadow',
  [utils.keys.container]: 'container',
  [utils.keys.cursor]: 'cursor',
  [utils.keys.divideColor]: 'divide-color',
  [utils.keys.divideWidth]: 'divide-width',
  [utils.keys.fill]: 'fill',
  [utils.keys.flex]: 'flex',
  [utils.keys.flexGrow]: 'flex-grow',
  [utils.keys.flexShrink]: 'flex-shrink',
  [utils.keys.fontFamily]: 'font-family',
  [utils.keys.fontSize]: 'font-size',
  [utils.keys.fontWeight]: 'font-weight',
  [utils.keys.height]: 'height',
  [utils.keys.inset]: 'inset',
  [utils.keys.letterSpacing]: 'letter-spacing',
  [utils.keys.lineHeight]: 'line-height',
  [utils.keys.listStyleType]: 'list-style-type',
  [utils.keys.margin]: 'margin',
  [utils.keys.maxHeight]: 'max-height',
  [utils.keys.maxWidth]: 'max-width',
  [utils.keys.minHeight]: 'min-height',
  [utils.keys.minWidth]: 'min-width',
  [utils.keys.objectPosition]: 'object-position',
  [utils.keys.opacity]: 'opacity',
  [utils.keys.order]: 'order',
  [utils.keys.padding]: 'padding',
  [utils.keys.placeholderColor]: 'placeholder-color',
  [utils.keys.space]: 'space',
  [utils.keys.stroke]: 'stroke',
  [utils.keys.strokeWidth]: 'stroke-width',
  [utils.keys.textColor]: 'text-color',
  [utils.keys.width]: 'width',
  [utils.keys.zIndex]: 'z-index',
  [utils.keys.gap]: 'gap',
  [utils.keys.gridTemplateColumns]: 'grid-template-columns',
  [utils.keys.gridColumn]: 'grid-column',
  [utils.keys.gridColumnStart]: 'grid-column-start',
  [utils.keys.gridColumnEnd]: 'grid-column-end',
  [utils.keys.gridTemplateRows]: 'grid-template-rows',
  [utils.keys.gridRow]: 'grid-row',
  [utils.keys.gridRowStart]: 'grid-row-start',
  [utils.keys.gridRowEnd]: 'grid-row-end',
  [utils.keys.transformOrigin]: 'transform-origin',
  [utils.keys.scale]: 'scale',
  [utils.keys.rotate]: 'rotate',
  [utils.keys.translate]: 'translate',
  [utils.keys.skew]: 'skew',
  [utils.keys.transitionProperty]: 'transition-property',
  [utils.keys.transitionTimingFunction]: 'transition-timing-function',
  [utils.keys.transitionDuration]: 'transition-duration',
  [utils.keys.transitionDelay]: 'transition-delay',
};

// Default----------------------------------------------------------------------------------------------------------------
utils.pre = function(theme, important = false, configPath = undefined) {
  if (!configPath) {
    utils.config = require('tailwindcss/resolveConfig')(require('lodash/cloneDeep')(require('tailwindcss/stubs/defaultConfig.stub.js')));
    utils.config.important = false;
    utils.config.separator = ':';
    utils.config.prefix = 'tw-';
    //初始化
    //统一所有颜色
    for (let k in utils.config.theme[utils.keys.colors]) {
      if (typeof utils.config.theme[utils.keys.colors][k] === 'string') continue;
      utils.config.theme[utils.keys.colors][k]['default'] = utils.config.theme[utils.keys.colors][k]['500'];
    }
    for (let k of utils.colorKeys) {
      if (k === utils.keys.colors) continue;
      utils.config.theme[k] = JSON.parse(JSON.stringify(utils.config.theme[utils.keys.colors]));
    }
    //统一所有尺寸
    for (let k of utils.spacingKeys) {
      if (k === utils.keys.spacing) continue;
      for (let sk in utils.config.theme[k]) {
        if (sk === 'screen') {
          utils.config.theme[utils.keys.spacing]['vw'] = '100vw';
          utils.config.theme[utils.keys.spacing]['vh'] = '100vh';
        } else {
          utils.config.theme[utils.keys.spacing][sk] = utils.config.theme[k][sk];
        }
      }
    }
    for (let k of utils.spacingKeys) {
      if (k === utils.keys.spacing) continue;
      utils.config.theme[k] = JSON.parse(JSON.stringify(utils.config.theme[utils.keys.spacing]));
    }
    // 配置插件
    utils.config.plugins.push(require(path.join(__dirname, './tw-plugin-vars'))());
  } else {
    let configFullPath = path.resolve(configPath);
    if (!fs.existsSync(configFullPath)) {
      configFullPath = path.resolve('node_modules', configPath);
    }
    delete require.cache[configFullPath];
    utils.config = require(configFullPath);
  }
  //
  utils.config.important = important;
  if (!theme || theme.startsWith('default:')) {
    utils.theme = theme ? theme.replace('default:', '') : '';
    //utils.config.plugins.push(require("./plugins/isVariants")());
  } else {
    utils.theme = theme;
    utils.config.corePlugins = [];
  }
  return utils.config;
};

// Plugins----------------------------------------------------------------------------------------------------------------
utils.whitelistCorePlugins = function(...ps) {
  utils.config.corePlugins = utils.config.corePlugins.concat(ps);
};
utils.addPlugins = function(...ps) {
  utils.config.plugins = utils.config.plugins.concat(ps);
};

// Variants----------------------------------------------------------------------------------------------------------------
utils.setVariants = function(vs) {
  for (let k in vs) {
    let currentVariants = utils.config.variants[k];
    vs[k].forEach((v) => {
      if (currentVariants.indexOf(v) < 0) currentVariants.push(v);
    });
  }
};
utils.setAllVariants = function(vs) {
  for (let k in utils.variantsKeys) {
    let currentVariants = utils.config.variants[k];
    vs.forEach((v) => {
      if (currentVariants.indexOf(v) < 0) currentVariants.push(v);
    });
  }
};

// Theme-----------------------------------------------------------------------------------------------------------------------
// value: number | string
// value: { [theme:string] : number | string }
// value: { [$theme:string] : number | string } 防止有key与key相同
const extraValue = function(value) {
  let ret;
  if (typeof value === 'string' || typeof value === 'number') {
    ret = value;
  } else if (value[`$${utils.theme}`]) {
    ret = value[`$${utils.theme}`];
  } else if (value[utils.theme]) {
    ret = value[utils.theme];
  }
  return ret || value;
};
utils.delete = function(key) {
  delete utils.config.theme[key];
};
utils.var = function(varName, value) {
  (utils.config.theme['vars'] || (utils.config.theme['vars'] = {}))[varName] = extraValue(value); // eslint-disable-line
};
// 设置值有多种方式
// base:"#ff0000"
// base:{dark:"#ff0000",light:"#ffff00"}
// base:{var:"",val:{dark:"#ff0000",light:"#ffff00"}}
utils.one = function(key, k, value) {
  let theme = utils.config.theme[key] || (utils.config.theme[key] = {}); // eslint-disable-line
  //
  if (key === 'vars') {
    theme[k] = extraValue(value);
    return;
  }
  if (key === 'is') {
    for (let kk in value) (theme[k] || (theme[k] = {}))[kk] = value[kk];
    return;
  }
  //
  let map = theme;
  let kk = k;
  if (k.indexOf('.') > 0) {
    let tmp = k.split('.');
    for (let i = 0; i < tmp.length; i++) {
      // if (i < tmp.length - 1) map = map[tmp[i]] || (map[tmp[i]] = {});
      // kk = tmp[i];
      if (i < tmp.length - 1) {
        let m = map[tmp[i]];
        if (!m || typeof m === 'string' || typeof m === 'number') {
          m = {};
          map[tmp[i]] = m;
        }
        map = m;
      } else {
        kk = tmp[i];
      }
    }
  }

  // 如果是css-var格式
  if (value.var !== undefined && value.val !== undefined) {
    let v = value.var || `--${utils.varKeys[key]}-${k.replace('.', '-')}`;
    map[kk] = `var(${v})`;
    utils.var(v, value.val);
  } else {
    map[kk] = extraValue(value);
  }
};
utils.group = function(key, map) {
  for (let k in map) utils.one(key, k, map[k]);
};
utils.mix = function(arr) {
  arr.forEach((args) => {
    let key = args[0];
    let k = args[1];
    let value = args[2];
    utils.one(key, k, value);
  });
};
utils.setAllColors = function(map) {
  utils.colorKeys.forEach((key) => {
    for (let k in map) utils.one(key, k, map[k]);
  });
};
utils.setAllSpacing = function(map) {
  utils.spacingKeys.forEach((key) => {
    for (let k in map) utils.one(key, k, map[k]);
  });
};
utils.setVars = function(map) {
  for (let varName in map) utils.var(varName, map[varName]);
};

// base:"#ff0000"
// base:{dark:"#ff0000"}
// base:[60, 40, 20, 10, "#409eff", 20, 50, 70, 90]
// base:{dark:[60, 40, 20, 10, "#409eff", 20, 50, 70, 90]}
// base:{var:"",val:{dark:[60, 40, 20, 10, "#409eff", 20, 50, 70, 90]}}
// base:{var:"",val:[60, 40, 20, 10, "#409eff", 20, 50, 70, 90]}
const extraColor = function(k, defaultCssVarName, value) {
  let map = {};
  // 获取value
  let cssVarName = '';
  if (value.var !== undefined && value.val !== undefined) {
    cssVarName = value.var || defaultCssVarName;
    value = value.val;
  }
  value = extraValue(value);
  //
  if (Array.isArray(value)) {
    // console.log(k, cssVarName);
    // map = extractColorFromLevels(k, cssVarName, value);
    let base = value[4];
    map[`${k}.default`] = !cssVarName ? base : { var: `--${cssVarName}`, val: base };
    value.forEach((c, i) => {
      if (i === 4 || !c || c === 0) return;
      let id = (i + 1) * 100;
      let mod = id < 500 ? utils.getDarkModCSS : utils.getLightModCSS;
      map[`${k}.${id}`] = !cssVarName
        ? typeof c === 'number'
          ? mod(base, c)
          : c
        : { var: `--${cssVarName}-${id}`, val: typeof c === 'number' ? mod(base, c) : c };
    });
  } else {
    map[k] = !cssVarName ? value : { var: `--${cssVarName}`, val: value };
  }
  // console.log(map);
  return map;
};

utils.setTypeColor = function(type, color) {
  utils.setAllColors(extraColor(type, type, color));
};
utils.setDefinedTypeColors = function(primary, secondary, success, danger, warning, info, others) {
  let ts = { primary, secondary, success, danger, warning, info, ...others };
  for (let t in ts) {
    if (ts[t]) utils.setAllColors(extraColor(t, t, ts[t]));
  }
};

utils.setDefinedTextColors = function(mainly, regular, ordinary, placeholder, disabled, others) {
  let cs = { mainly, regular, ordinary, placeholder, disabled, ...others };
  for (let k in cs) {
    if (cs[k]) {
      utils.group(utils.keys.textColor, extraColor(k, `${utils.varKeys[utils.keys.textColor]}-${k}`, cs[k]));
    }
  }
};
utils.setDefinedBorderColors = function(mainly, regular, ordinary, disabled, others) {
  let cs = { mainly, regular, ordinary, disabled, ...others };
  for (let k in cs) {
    if (cs[k]) {
      utils.group(utils.keys.borderColor, extraColor(k, `${utils.varKeys[utils.keys.borderColor]}-${k}`, cs[k]));
    }
  }
};
utils.setDefinedBgColors = function(mainly, regular, ordinary, disabled, others) {
  let cs = { mainly, regular, ordinary, disabled, ...others };
  for (let k in cs) {
    if (cs[k]) {
      utils.group(utils.keys.backgroundColor, extraColor(k, `${utils.varKeys[utils.keys.backgroundColor]}-${k}`, cs[k]));
    }
  }
};

// Theme.colors----------------------------------------------------------------------------------------------------------------
utils.getTheme = function(k, kk) {
  let cur = utils.config.theme[k];
  if (!cur) return undefined;
  let tmp = kk.split('.');
  for (let i = 0; i < tmp.length; i++) {
    cur = cur[tmp[i]];
    if (!cur) return undefined;
  }
  return cur;
};
utils.getColorModCSS = function(a, b, p) {
  return `color-mod(${a} blend(${b} ${p}%))`;
};
utils.getLightModCSS = function(a, p) {
  return `color-mod(${a} blend(${utils.config.theme[utils.keys.colors].white} ${p}%))`;
};
utils.getDarkModCSS = function(a, p) {
  return `color-mod(${a} blend(${utils.config.theme[utils.keys.colors].black} ${p}%))`;
};
utils.getColor = function(kk) {
  return utils.getTheme(utils.keys.colors, kk);
};
utils.getTextColor = function(kk) {
  return utils.getTheme(utils.keys.textColor, kk);
};
utils.getBorderColor = function(kk) {
  return utils.getTheme(utils.keys.borderColor, kk);
};
utils.getBackgroundColor = function(kk) {
  return utils.getTheme(utils.keys.backgroundColor, kk);
};
