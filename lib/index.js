const path = require('path');
const fs = require('fs');

const utils = {};
module.exports = utils;

utils.config = undefined;
utils.theme = '';

// Base----------------------------------------------------------------------------------------------------------------
utils.keys = {
  colors: 'colors',
  textColor: 'textColor',
  borderColor: 'borderColor',
  backgroundColor: 'backgroundColor',
  //
  spacing: 'spacing',
  width: 'width',
  height: 'height',
  minWidth: 'minWidth',
  maxWidth: 'maxWidth',
  minHeight: 'minHeight',
  maxHeight: 'maxHeight',
  padding: 'padding',
  margin: 'margin',
  //
  screens: 'screens',
  backgroundPosition: 'backgroundPosition',
  backgroundSize: 'backgroundSize',
  borderRadius: 'borderRadius',
  borderWidth: 'borderWidth',
  boxShadow: 'boxShadow',
  container: 'container',
  cursor: 'cursor',
  fill: 'fill',
  flex: 'flex',
  flexGrow: 'flexGrow',
  flexShrink: 'flexShrink',
  fontFamily: 'fontFamily',
  fontSize: 'fontSize',
  fontWeight: 'fontWeight',
  inset: 'inset',
  letterSpacing: 'letterSpacing',
  lineHeight: 'lineHeight',
  listStyleType: 'listStyleType',
  objectPosition: 'objectPosition',
  opacity: 'opacity',
  order: 'order',
  placeholderColor: 'placeholderColor',
  stroke: 'stroke',
  strokeWidth: 'strokeWidth',
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
  accessibility: ['responsive', 'focus'],
  alignContent: ['responsive'],
  alignItems: ['responsive'],
  alignSelf: ['responsive'],
  appearance: ['responsive'],
  backgroundAttachment: ['responsive'],
  backgroundColor: ['responsive', 'hover', 'focus'],
  backgroundPosition: ['responsive'],
  backgroundRepeat: ['responsive'],
  backgroundSize: ['responsive'],
  borderCollapse: ['responsive'],
  borderColor: ['responsive', 'hover', 'focus'],
  borderRadius: ['responsive'],
  borderStyle: ['responsive'],
  borderWidth: ['responsive'],
  boxShadow: ['responsive', 'hover', 'focus'],
  boxSizing: ['responsive'],
  cursor: ['responsive'],
  display: ['responsive'],
  fill: ['responsive'],
  flex: ['responsive'],
  flexDirection: ['responsive'],
  flexGrow: ['responsive'],
  flexShrink: ['responsive'],
  flexWrap: ['responsive'],
  float: ['responsive'],
  clear: ['responsive'],
  fontFamily: ['responsive'],
  fontSize: ['responsive'],
  fontSmoothing: ['responsive'],
  fontStyle: ['responsive'],
  fontWeight: ['responsive', 'hover', 'focus'],
  height: ['responsive'],
  inset: ['responsive'],
  justifyContent: ['responsive'],
  letterSpacing: ['responsive'],
  lineHeight: ['responsive'],
  listStylePosition: ['responsive'],
  listStyleType: ['responsive'],
  margin: ['responsive'],
  maxHeight: ['responsive'],
  maxWidth: ['responsive'],
  minHeight: ['responsive'],
  minWidth: ['responsive'],
  objectFit: ['responsive'],
  objectPosition: ['responsive'],
  opacity: ['responsive', 'hover', 'focus'],
  order: ['responsive'],
  outline: ['responsive', 'focus'],
  overflow: ['responsive'],
  padding: ['responsive'],
  placeholderColor: ['responsive', 'focus'],
  pointerEvents: ['responsive'],
  position: ['responsive'],
  resize: ['responsive'],
  stroke: ['responsive'],
  strokeWidth: ['responsive'],
  tableLayout: ['responsive'],
  textAlign: ['responsive'],
  textColor: ['responsive', 'hover', 'focus'],
  textDecoration: ['responsive', 'hover', 'focus'],
  textTransform: ['responsive'],
  userSelect: ['responsive'],
  verticalAlign: ['responsive'],
  visibility: ['responsive'],
  whitespace: ['responsive'],
  width: ['responsive'],
  wordBreak: ['responsive'],
  zIndex: ['responsive'],
  gap: ['responsive'],
  gridAutoFlow: ['responsive'],
  gridTemplateColumns: ['responsive'],
  gridColumn: ['responsive'],
  gridColumnStart: ['responsive'],
  gridColumnEnd: ['responsive'],
  gridTemplateRows: ['responsive'],
  gridRow: ['responsive'],
  gridRowStart: ['responsive'],
  gridRowEnd: ['responsive'],
  transform: ['responsive'],
  transformOrigin: ['responsive'],
  scale: ['responsive', 'hover', 'focus'],
  rotate: ['responsive', 'hover', 'focus'],
  translate: ['responsive', 'hover', 'focus'],
  skew: ['responsive', 'hover', 'focus'],
  transitionProperty: ['responsive'],
  transitionTimingFunction: ['responsive'],
  transitionDuration: ['responsive'],
};
utils.variantsValues = {
  responsive: 'responsive',
  hover: 'hover',
  focus: 'focus',
  active: 'active',
  'group-hover': 'group-hover',
  'focus-within': 'focus-within',
};
utils.corePluginsKeys = {
  preflight: `Tailwind's base/reset styles`,
  container: `The container component`,
  accessibility: `The sr-only and not-sr-only utilities`,
  alignContent: `The align-content utilities like content-between`,
  alignItems: `The align-items utilities like items-start`,
  alignSelf: `The align-self utilities like self-end`,
  appearance: `The appearance utilities like appearance-none`,
  backgroundAttachment: `The background-attachment utilities like bg-fixed`,
  backgroundColor: `The background-color utilities like bg-gray-200`,
  backgroundPosition: `The background-position utilities like bg-center`,
  backgroundRepeat: `The background-repeat utilities like bg-no-repeat`,
  backgroundSize: `The background-size utilities like bg-cover`,
  borderCollapse: `The border-collapse utilities like border-separate`,
  borderColor: `The border-color utilities like border-gray-300`,
  borderRadius: `The border-radius utilities like rounded-lg`,
  borderStyle: `The border-style utilities like border-dashed`,
  borderWidth: `The border-width utilities like border-2`,
  boxSizing: `The box-sizing utilities like box-border`,
  boxShadow: `The box-shadow utilities like shadow-xl`,
  clear: `The clear utilities like clear-left`,
  cursor: `The cursor utilities like cursor-pointer`,
  display: `The display utilities like block`,
  fill: `The fill utilities like fill-current`,
  flex: `The flex utilities like flex-1`,
  flexDirection: `The flex-direction utilities like flex-col`,
  flexGrow: `The flex-grow utilities like flex-grow-0`,
  flexShrink: `The flex-shrink utilities like flex-shrink-0`,
  flexWrap: `The flex-wrap utilities like flex-no-wrap`,
  float: `The float utilities like float-left`,
  gap: `The gap utilities like gap-4`,
  gridAutoFlow: `The grid-auto-flow utilities like grid-flow-col`,
  gridColumn: `The grid-column utilities like col-span-6`,
  gridColumnStart: `The grid-column-start utilities like col-start-1`,
  gridColumnEnd: `The grid-column-end utilities like col-end-4`,
  gridRow: `The grid-row utilities like row-span-6`,
  gridRowStart: `The grid-row-start utilities like row-start-1`,
  gridRowEnd: `The grid-row-end utilities like row-end-4`,
  gridTemplateColumns: `The grid-template-columns utilities like grid-cols-4`,
  gridTemplateRows: `The grid-template-rows utilities like grid-rows-4`,
  fontFamily: `The font-family utilities like font-sans`,
  fontSize: `The font-size utilities like text-xl`,
  fontSmoothing: `The font-smoothing utilities like antialiased`,
  fontStyle: `The font-style utilities like italic`,
  fontWeight: `The font-weight utilities like font-bold`,
  height: `The height utilities like h-8`,
  inset: `The inset utilities like top-0`,
  justifyContent: `The justify-content utilities like justify-between`,
  letterSpacing: `The letter-spacing utilities like tracking-tight`,
  lineHeight: `The line-height utilities like leading-normal`,
  listStylePosition: `The list-style-position utilities like list-inside`,
  listStyleType: `The list-style-type utilities like list-disc`,
  margin: `The margin utilities like mt-4`,
  maxHeight: `The max-height utilities like max-h-screen`,
  maxWidth: `The max-width utilities like max-w-full`,
  minHeight: `The min-height utilities like min-h-screen`,
  minWidth: `The min-width utilities like min-w-0`,
  objectFit: `The object-fit utilities like object-cover`,
  objectPosition: `The object-position utilities like object-center`,
  opacity: `The opacity utilities like opacity-50`,
  order: `The flexbox order utilities like order-last`,
  outline: `The outline utilities like outline-none`,
  overflow: `The overflow utilities like overflow-hidden`,
  padding: `The padding utilities like py-12`,
  pointerEvents: `The pointer-events utilities like pointer-events-none`,
  position: `The position utilities like absolute`,
  resize: `The resize utilities like resize-y`,
  rotate: `The rotate utilities like rotate-90`,
  scale: `The scale utilities like scale-150`,
  skew: `The skew utilities like skew-y-3`,
  stroke: `The stroke utilities like stroke-current`,
  strokeWidth: `The stroke-width utilities like stroke-2`,
  tableLayout: `The table-layout utilities like table-fixed`,
  textAlign: `The text-align utilities like text-center`,
  textColor: `The text-color utilities like text-red-600`,
  textDecoration: `The text-decoration utilities like underline`,
  textTransform: `The text-transform utilities like uppercase`,
  transform: `The transform utility (for enabling transform features)`,
  transitionDuration: `The transition-duration utilities like duration-100`,
  transitionProperty: `The transition-property utilities like transition-colors`,
  transitionTimingFunction: `The transition-timing-function utilities like ease-in-out`,
  translate: `The translate utilities like translate-y-6`,
  userSelect: `The user-select utilities like user-select-none`,
  verticalAlign: `The vertical-align utilities like align-middle`,
  visibility: `The visibility utilities like invisible`,
  whitespace: `The whitespace utilities like whitespace-no-wrap`,
  width: `The width utilities like w-1/2`,
  wordBreak: `The word-break utilities like break-all`,
  zIndex: `The z-index utilities like z-50`,
};
utils.varKeys = {
  [utils.keys.colors]: 'color',
  [utils.keys.textColor]: 'text',
  [utils.keys.borderColor]: 'border',
  [utils.keys.backgroundColor]: 'bg',
  //
  [utils.keys.spacing]: 'spacing',
  [utils.keys.width]: 'width',
  [utils.keys.height]: 'height',
  [utils.keys.minWidth]: 'min-width',
  [utils.keys.maxWidth]: 'max-width',
  [utils.keys.minHeight]: 'min-height',
  [utils.keys.maxHeight]: 'max-height',
  [utils.keys.padding]: 'padding',
  [utils.keys.margin]: 'margin',
  //
  [utils.keys.screens]: 'screens',
  [utils.keys.backgroundPosition]: 'bg-position',
  [utils.keys.backgroundSize]: 'bg-size',
  [utils.keys.borderRadius]: 'border-radius',
  [utils.keys.borderWidth]: 'border-width',
  [utils.keys.boxShadow]: 'box-shadow',
  [utils.keys.container]: 'container',
  [utils.keys.cursor]: 'cursor',
  [utils.keys.fill]: 'fill',
  [utils.keys.flex]: 'flex',
  [utils.keys.flexGrow]: 'flex-grow',
  [utils.keys.flexShrink]: 'flex-shrink',
  [utils.keys.fontFamily]: 'font-family',
  [utils.keys.fontSize]: 'font-size',
  [utils.keys.fontWeight]: 'font-weight',
  [utils.keys.inset]: 'inset',
  [utils.keys.letterSpacing]: 'letter-spacing',
  [utils.keys.lineHeight]: 'line-height',
  [utils.keys.listStyleType]: 'list-style-type',
  [utils.keys.objectPosition]: 'object-position',
  [utils.keys.opacity]: 'opacity',
  [utils.keys.order]: 'order',
  [utils.keys.placeholderColor]: 'place-holder-color',
  [utils.keys.stroke]: 'stroke',
  [utils.keys.strokeWidth]: 'stroke-width',
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
        utils.config.theme[utils.keys.spacing][sk] = utils.config.theme[k][sk];
      }
    }
    for (let k of utils.spacingKeys) {
      if (k === utils.keys.spacing) continue;
      utils.config.theme[k] = JSON.parse(JSON.stringify(utils.config.theme[utils.keys.spacing]));
    }
    // 配置插件
    utils.config.plugins.push(require(path.join(__dirname, './tw-plugin-vars'))());
  } else {
    configPath = path.resolve(configPath);
    if (!fs.existsSync(configPath)) {
      configPath = path.resolve('node_modules', configPath);
    }
    delete require.cache[configPath];
    utils.config = require(configPath);
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
utils.setDefinedTextColors = function(mainly, regular, secondary, placeholder, disabled, others) {
  let cs = { mainly, regular, secondary, placeholder, disabled, ...others };
  for (let k in cs) {
    if (cs[k]) {
      utils.group(utils.keys.textColor, extraColor(k, `${utils.varKeys[utils.keys.textColor]}-${k}`, cs[k]));
    }
  }
};
utils.setDefinedBorderColors = function(mainly, regular, secondary, disabled, others) {
  let cs = { mainly, regular, secondary, disabled, ...others };
  for (let k in cs) {
    if (cs[k]) {
      utils.group(utils.keys.borderColor, extraColor(k, `${utils.varKeys[utils.keys.borderColor]}-${k}`, cs[k]));
    }
  }
};
utils.setDefinedBgColors = function(mainly, regular, secondary, disabled, others) {
  let cs = { mainly, regular, secondary, disabled, ...others };
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
