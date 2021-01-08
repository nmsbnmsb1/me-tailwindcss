const path = require('path');
const fs = require('fs');
const allColors = require('tailwindcss/colors');

const utils = {};
module.exports = utils;

utils.config = undefined;
utils.theme = '';
utils.colors = allColors;

// Base----------------------------------------------------------------------------------------------------------------
utils.keys = {
  screens: 'screens',
  colors: 'colors',
  spacing: 'spacing',
  animation: 'animation',
  backgroundColor: 'backgroundColor',
  backgroundImage: 'backgroundImage',
  backgroundOpacity: 'backgroundOpacity',
  backgroundPosition: 'backgroundPosition',
  backgroundSize: 'backgroundSize',
  borderColor: 'borderColor',
  borderOpacity: 'borderOpacity',
  borderRadius: 'borderRadius',
  borderWidth: 'borderWidth',
  boxShadow: 'boxShadow',
  container: 'container',
  cursor: 'cursor',
  divideColor: 'divideColor',
  divideOpacity: 'divideOpacity',
  divideWidth: 'divideWidth',
  fill: 'fill',
  flex: 'flex',
  flexGrow: 'flexGrow',
  flexShrink: 'flexShrink',
  fontFamily: 'fontFamily',
  fontSize: 'fontSize',
  fontWeight: 'fontWeight',
  gap: 'gap',
  gradientColorStops: 'gradientColorStops',
  gridAutoColumns: 'gridAutoColumns',
  gridAutoRows: 'gridAutoRows',
  gridColumn: 'gridColumn',
  gridColumnEnd: 'gridColumnEnd',
  gridColumnStart: 'gridColumnStart',
  gridRow: 'gridRow',
  gridRowStart: 'gridRowStart',
  gridRowEnd: 'gridRowEnd',
  transformOrigin: 'transformOrigin',
  gridTemplateColumns: 'gridTemplateColumns',
  gridTemplateRows: 'gridTemplateRows',
  height: 'height',
  inset: 'inset',
  keyframes: 'keyframes',
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
  outline: 'outline',
  padding: 'padding',
  placeholderColor: 'placeholderColor',
  placeholderOpacity: 'placeholderOpacity',
  ringColor: 'ringColor',
  ringOffsetColor: 'ringOffsetColor',
  ringOffsetWidth: 'ringOffsetWidth',
  ringOpacity: 'ringOpacity',
  ringWidth: 'ringWidth',
  rotate: 'rotate',
  scale: 'scale',
  skew: 'skew',
  space: 'space',
  stroke: 'stroke',
  strokeWidth: 'strokeWidth',
  textColor: 'textColor',
  textOpacity: 'textOpacity',
  transitionDuration: 'transitionDuration',
  transitionDelay: 'transitionDelay',
  transitionProperty: 'transitionProperty',
  transitionTimingFunction: 'transitionTimingFunction',
  translate: 'translate',
  width: 'width',
  zIndex: 'zIndex',
};
utils.colorKeys = [
  utils.keys.colors,
  utils.keys.backgroundColor,
  utils.keys.borderColor,
  utils.keys.divideColor,
  utils.keys.gradientColorStops,
  utils.keys.placeholderColor,
  utils.keys.ringColor,
  utils.keys.ringOffsetColor,
  utils.keys.textColor,
];
utils.spacingKeys = [
  utils.keys.spacing,
  utils.keys.width,
  utils.keys.height,
  utils.keys.maxWidth,
  utils.keys.maxHeight,
  utils.keys.minWidth,
  utils.keys.minHeight,
  utils.keys.margin,
  utils.keys.padding,
  utils.keys.space,
  utils.keys.gap,
];
utils.opacityKeys = [
  utils.keys.backgroundOpacity,
  utils.keys.borderOpacity,
  utils.keys.divideOpacity,
  utils.keys.opacity,
  utils.keys.placeholderOpacity,
  utils.keys.ringOpacity,
  utils.keys.textOpacity,
];
utils.variantsKeys = {
  accessibility: 'accessibility',
  alignContent: 'alignContent',
  alignItems: 'alignItems',
  alignSelf: 'alignSelf',
  animation: 'animation',
  appearance: 'appearance',
  backgroundAttachment: 'backgroundAttachment',
  backgroundClip: 'backgroundClip',
  backgroundColor: 'backgroundColor',
  backgroundImage: 'backgroundImage',
  backgroundOpacity: 'backgroundOpacity',
  backgroundPosition: 'backgroundPosition',
  backgroundRepeat: 'backgroundRepeat',
  backgroundSize: 'backgroundSize',
  borderCollapse: 'borderCollapse',
  borderColor: 'borderColor',
  borderOpacity: 'borderOpacity',
  borderRadius: 'borderRadius',
  borderStyle: 'borderStyle',
  borderWidth: 'borderWidth',
  boxShadow: 'boxShadow',
  boxSizing: 'boxSizing',
  clear: 'clear',
  container: 'container',
  cursor: 'cursor',
  display: 'display',
  divideColor: 'divideColor',
  divideOpacity: 'divideOpacity',
  divideStyle: 'divideStyle',
  divideWidth: 'divideWidth',
  fill: 'fill',
  flex: 'flex',
  flexDirection: 'flexDirection',
  flexGrow: 'flexGrow',
  flexShrink: 'flexShrink',
  flexWrap: 'flexWrap',
  float: 'float',
  fontFamily: 'fontFamily',
  fontSize: 'fontSize',
  fontSmoothing: 'fontSmoothing',
  fontStyle: 'fontStyle',
  fontVariantNumeric: 'fontVariantNumeric',
  fontWeight: 'fontWeight',
  gap: 'gap',
  gradientColorStops: 'gradientColorStops',
  gridAutoColumns: 'gridAutoColumns',
  gridAutoFlow: 'gridAutoFlow',
  gridAutoRows: 'gridAutoRows',
  gridColumn: 'gridColumn',
  gridColumnEnd: 'gridColumnEnd',
  gridColumnStart: 'gridColumnStart',
  gridRow: 'gridRow',
  gridRowEnd: 'gridRowEnd',
  gridRowStart: 'gridRowStart',
  gridTemplateColumns: 'gridTemplateColumns',
  gridTemplateRows: 'gridTemplateRows',
  height: 'height',
  inset: 'inset',
  justifyContent: 'justifyContent',
  justifyItems: 'justifyItems',
  justifySelf: 'justifySelf',
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
  overscrollBehavior: 'overscrollBehavior',
  padding: 'padding',
  placeContent: 'placeContent',
  placeItems: 'placeItems',
  placeSelf: 'placeSelf',
  placeholderColor: 'placeholderColor',
  placeholderOpacity: 'placeholderOpacity',
  pointerEvents: 'pointerEvents',
  position: 'position',
  resize: 'resize',
  ringColor: 'ringColor',
  ringOffsetColor: 'ringOffsetColor',
  ringOffsetWidth: 'ringOffsetWidth',
  ringOpacity: 'ringOpacity',
  ringWidth: 'ringWidth',
  rotate: 'rotate',
  scale: 'scale',
  skew: 'skew',
  space: 'space',
  stroke: 'stroke',
  strokeWidth: 'strokeWidth',
  tableLayout: 'tableLayout',
  textAlign: 'textAlign',
  textColor: 'textColor',
  textDecoration: 'textDecoration',
  textOpacity: 'textOpacity',
  textOverflow: 'textOverflow',
  textTransform: 'textTransform',
  transform: 'transform',
  transformOrigin: 'transformOrigin',
  transitionDelay: 'transitionDelay',
  transitionDuration: 'transitionDuration',
  transitionProperty: 'transitionProperty',
  transitionTimingFunction: 'transitionTimingFunction',
  translate: 'translate',
  userSelect: 'userSelect',
  verticalAlign: 'verticalAlign',
  visibility: 'visibility',
  whitespace: 'whitespace',
  width: 'width',
  wordBreak: 'wordBreak',
  zIndex: 'zIndex',
};
utils.variantsValues = {
  first: 'first',
  last: 'last',
  odd: 'odd',
  even: 'even',
  visited: 'visited',
  checked: 'checked',
  'group-hover': 'group-hover',
  'group-focus': 'group-focus',
  'focus-within': 'focus-within',
  hover: 'hover',
  focus: 'focus',
  'focus-visible': 'focus-visible',
  active: 'active',
  disabled: 'disabled',
};
utils.corePluginsKeys = {
  preflight: 'preflight',
  container: 'container',
  space: 'space',
  divideWidth: 'divideWidth',
  divideColor: 'divideColor',
  divideStyle: 'divideStyle',
  divideOpacity: 'divideOpacity',
  accessibility: 'accessibility',
  appearance: 'appearance',
  backgroundAttachment: 'backgroundAttachment',
  backgroundClip: 'backgroundClip',
  backgroundColor: 'backgroundColor',
  backgroundImage: 'backgroundImage',
  gradientColorStops: 'gradientColorStops',
  backgroundOpacity: 'backgroundOpacity',
  backgroundPosition: 'backgroundPosition',
  backgroundRepeat: 'backgroundRepeat',
  backgroundSize: 'backgroundSize',
  borderCollapse: 'borderCollapse',
  borderColor: 'borderColor',
  borderOpacity: 'borderOpacity',
  borderRadius: 'borderRadius',
  borderStyle: 'borderStyle',
  borderWidth: 'borderWidth',
  boxSizing: 'boxSizing',
  cursor: 'cursor',
  display: 'display',
  flexDirection: 'flexDirection',
  flexWrap: 'flexWrap',
  placeItems: 'placeItems',
  placeContent: 'placeContent',
  placeSelf: 'placeSelf',
  alignItems: 'alignItems',
  alignContent: 'alignContent',
  alignSelf: 'alignSelf',
  justifyItems: 'justifyItems',
  justifyContent: 'justifyContent',
  justifySelf: 'justifySelf',
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
  overscrollBehavior: 'overscrollBehavior',
  padding: 'padding',
  placeholderColor: 'placeholderColor',
  placeholderOpacity: 'placeholderOpacity',
  pointerEvents: 'pointerEvents',
  position: 'position',
  inset: 'inset',
  resize: 'resize',
  boxShadow: 'boxShadow',
  ringWidth: 'ringWidth',
  ringOffsetColor: 'ringOffsetColor',
  ringOffsetWidth: 'ringOffsetWidth',
  ringColor: 'ringColor',
  ringOpacity: 'ringOpacity',
  fill: 'fill',
  stroke: 'stroke',
  strokeWidth: 'strokeWidth',
  tableLayout: 'tableLayout',
  textAlign: 'textAlign',
  textColor: 'textColor',
  textOpacity: 'textOpacity',
  textOverflow: 'textOverflow',
  fontStyle: 'fontStyle',
  textTransform: 'textTransform',
  textDecoration: 'textDecoration',
  fontSmoothing: 'fontSmoothing',
  fontVariantNumeric: 'fontVariantNumeric',
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
  gridAutoColumns: 'gridAutoColumns',
  gridColumn: 'gridColumn',
  gridColumnStart: 'gridColumnStart',
  gridColumnEnd: 'gridColumnEnd',
  gridTemplateRows: 'gridTemplateRows',
  gridAutoRows: 'gridAutoRows',
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
  animation: 'animation',
};
utils.varKeys = {
  [utils.keys.screens]: 'screens',
  [utils.keys.colors]: 'colors',
  [utils.keys.spacing]: 'spacing',
  [utils.keys.animation]: 'animation',
  [utils.keys.backgroundColor]: 'bg',
  [utils.keys.backgroundImage]: 'bg-image',
  [utils.keys.backgroundOpacity]: 'bg-opacity',
  [utils.keys.backgroundPosition]: 'bg-position',
  [utils.keys.backgroundSize]: 'bg-size',
  [utils.keys.borderColor]: 'border',
  [utils.keys.borderOpacity]: 'border-opacity',
  [utils.keys.borderRadius]: 'border-radius',
  [utils.keys.borderWidth]: 'border-width',
  [utils.keys.boxShadow]: 'box-shadow',
  [utils.keys.container]: 'container',
  [utils.keys.cursor]: 'cursor',
  [utils.keys.divideColor]: 'divide-color',
  [utils.keys.divideOpacity]: 'divide-opacity',
  [utils.keys.divideWidth]: 'divide-width',
  [utils.keys.fill]: 'fill',
  [utils.keys.flex]: 'flex',
  [utils.keys.flexGrow]: 'flex-grow',
  [utils.keys.flexShrink]: 'flex-shrink',
  [utils.keys.fontFamily]: 'font-family',
  [utils.keys.fontSize]: 'font-size',
  [utils.keys.fontWeight]: 'font-weight',
  [utils.keys.gap]: 'gap',
  [utils.keys.gradientColorStops]: 'gradient-color-stops',
  [utils.keys.gridAutoColumns]: 'grid-auto-columns',
  [utils.keys.gridAutoRows]: 'grid-auto-rows',
  [utils.keys.gridColumn]: 'grid-column',
  [utils.keys.gridColumnEnd]: 'grid-column-end',
  [utils.keys.gridColumnStart]: 'grid-column-start',
  [utils.keys.gridRow]: 'grid-row',
  [utils.keys.gridRowStart]: 'grid-row-start',
  [utils.keys.gridRowEnd]: 'grid-row-end',
  [utils.keys.transformOrigin]: 'transform-origin',
  [utils.keys.gridTemplateColumns]: 'grid-template-columns',
  [utils.keys.gridTemplateRows]: 'grid-template-rows',
  [utils.keys.height]: 'height',
  [utils.keys.inset]: 'inset',
  [utils.keys.keyframes]: 'keyframes',
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
  [utils.keys.outline]: 'outline',
  [utils.keys.padding]: 'padding',
  [utils.keys.placeholderColor]: 'placeholder-color',
  [utils.keys.placeholderOpacity]: 'placeholder-opacity',
  [utils.keys.ringColor]: 'ring-color',
  [utils.keys.ringOffsetColor]: 'ring-offset-color',
  [utils.keys.ringOffsetWidth]: 'ring-offset-width',
  [utils.keys.ringOpacity]: 'ring-opacity',
  [utils.keys.ringWidth]: 'ring-width',
  [utils.keys.rotate]: 'rotate',
  [utils.keys.scale]: 'scale',
  [utils.keys.skew]: 'skew',
  [utils.keys.space]: 'space',
  [utils.keys.stroke]: 'stroke',
  [utils.keys.strokeWidth]: 'stroke-width',
  [utils.keys.textColor]: 'text',
  [utils.keys.textOpacity]: 'text-opacity',
  [utils.keys.transitionDuration]: 'transition-duration',
  [utils.keys.transitionDelay]: 'transition-delay',
  [utils.keys.transitionProperty]: 'transition-property',
  [utils.keys.transitionTimingFunction]: 'transition-timing-function',
  [utils.keys.translate]: 'translate',
  [utils.keys.width]: 'width',
  [utils.keys.zIndex]: 'z-index',
};

// Default----------------------------------------------------------------------------------------------------------------
utils.pre = function (theme, options = {}, parentConfig = undefined) {
  if (!parentConfig) {
    utils.config = require('tailwindcss/resolveConfig')(require('lodash/cloneDeep')(require('tailwindcss/stubs/defaultConfig.stub.js')));
    utils.config.purge = {
      enabled: true,
      //mode: 'all',
      preserveHtmlElements: true,
      layers: ['components', 'utilities'],
      content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.js', './src/**/*.ts', './examples/**/*.vue', './examples/**/*.js', './examples/**/*.ts'],
    };
    utils.config.darkMode = false; // or 'media' or 'class'
    utils.config.prefix = 'tw-';
    utils.config.separator = ':';
    utils.config.important = false;

    //统一所有颜色
    {
      utils.config.theme[utils.keys.colors] = {
        //...JSON.parse(JSON.stringify(utils.config.theme[utils.keys.colors])),
        transparent: 'transparent',
        current: 'currentColor',
        black: allColors.black,
        white: allColors.white,
      };
      // for (const k in utils.config.theme[utils.keys.colors]) {
      //   if (typeof utils.config.theme[utils.keys.colors][k] === 'string') continue;
      //   //
      //   utils.config.theme[utils.keys.colors][k]['DEFAULT'] = utils.config.theme[utils.keys.colors][k]['500'];
      //   delete utils.config.theme[utils.keys.colors][k]['500'];
      // }
      for (const k of utils.colorKeys) {
        if (k === utils.keys.colors) continue;
        //
        utils.config.theme[k] = { ...JSON.parse(JSON.stringify(utils.config.theme[utils.keys.colors])) };
      }
    }

    //统一所有尺寸
    {
      for (const k of utils.spacingKeys) {
        if (k === utils.keys.spacing) continue;
        //
        utils.config.theme[utils.keys.spacing] = { ...utils.config.theme[utils.keys.spacing], vw: '100vw', vh: '100vh', ...utils.config.theme[k] };
        // for (let sk in utils.config.theme[k]) {
        //   if (sk === 'screen') {
        //     utils.config.theme[utils.keys.spacing]['vw'] = '100vw';
        //     utils.config.theme[utils.keys.spacing]['vh'] = '100vh';
        //   } else {
        //     utils.config.theme[utils.keys.spacing][sk] = utils.config.theme[k][sk];
        //   }
        // }
      }
      for (let k of utils.spacingKeys) {
        if (k === utils.keys.spacing) continue;
        utils.config.theme[k] = { ...utils.config.theme[k], ...JSON.parse(JSON.stringify(utils.config.theme[utils.keys.spacing])) };
      }
    }

    //透明度
    {
      for (const k of utils.opacityKeys) {
        if (k === utils.keys.opacity) continue;
        utils.config.theme[k] = { ...utils.config.theme[k], ...JSON.parse(JSON.stringify(utils.config.theme[utils.keys.opacity])) };
      }
    }

    //去除breakpoints
    {
      utils.config.theme[utils.keys.screens] = {};
    }

    //只开启常用的coreplugins
    {
      utils.config.corePlugins = [
        utils.corePluginsKeys.preflight,
        utils.corePluginsKeys.backgroundColor,
        utils.corePluginsKeys.borderColor,
        utils.corePluginsKeys.borderRadius,
        utils.corePluginsKeys.borderStyle,
        utils.corePluginsKeys.borderWidth,
        utils.corePluginsKeys.display,
        utils.corePluginsKeys.flex,
        utils.corePluginsKeys.flexGrow,
        utils.corePluginsKeys.flexShrink,
        utils.corePluginsKeys.fontFamily,
        utils.corePluginsKeys.fontWeight,
        utils.corePluginsKeys.height,
        utils.corePluginsKeys.fontSize,
        utils.corePluginsKeys.lineHeight,
        utils.corePluginsKeys.margin,
        utils.corePluginsKeys.padding,
        utils.corePluginsKeys.boxShadow,
        utils.corePluginsKeys.textColor,
        utils.corePluginsKeys.width,
      ];
    }

    // 配置插件
    {
      utils.config.plugins.push(require(path.join(__dirname, './tw-plugin-vars'))());
      utils.config.plugins.push(require(path.join(__dirname, './tw-plugin-flex'))());
    }
    //
  } else {
    //
    let configFullPath = path.resolve(parentConfig);
    if (!fs.existsSync(configFullPath)) configFullPath = path.resolve('node_modules', parentConfig);
    delete require.cache[configFullPath];
    utils.config = require(configFullPath);
  }
  //
  if (!theme || theme.startsWith('default:')) {
    utils.theme = theme ? theme.replace('default:', '') : '';
    //utils.config.plugins.push(require("./plugins/isVariants")());
  } else {
    utils.theme = theme;
    //utils.config.corePlugins = [];
  }
  //
  if (options) utils.setOptions(options);
  //
  return utils.config;
};

// Plugins----------------------------------------------------------------------------------------------------------------
utils.setOptions = function (options) {
  if (options.purge) utils.config.purge = options.purge;
  if (options.darkMode) utils.config.darkMode = options.darkMode;
  if (options.prefix) utils.config.prefix = options.prefix;
  if (options.separator) utils.config.separator = options.separator;
  if (options.important) utils.config.important = options.important;
};

// Plugins----------------------------------------------------------------------------------------------------------------
utils.addPlugins = function (...ps) {
  utils.config.plugins.push(...ps);
};

// Core-Plugins & Variants----------------------------------------------------------------------------------------------------------------
utils.setCorePlugin = function (cpk, enabled) {
  if (enabled) {
    if (utils.config.corePlugins.indexOf(cpk) < 0) utils.config.corePlugins.push(cpk);
  } else {
    if (utils.config.corePlugins.indexOf(cpk) >= 0) utils.config.corePlugins.splice(utils.config.corePlugins.indexOf(cpk), 1);
  }
};
utils.setVariants = function (vk, vs) {
  let currentVariants = utils.config.variants[vk];
  if (Array.isArray(vs)) {
    currentVariants = vs;
  } else {
    for (const k in vs) {
      if (currentVariants.indexOf(k) < 0) currentVariants.push(k);
    }
  }
};

// Theme-----------------------------------------------------------------------------------------------------------------------
// value: number|string|object
// value: { [theme:string] : number|string|object}
// value: { [$theme:string] : number|string|object } 防止有key与key相同
const extraValue = function (value) {
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
utils.delete = function (key) {
  delete utils.config.theme[key];
};
utils.var = function (varName, value) {
  (utils.config.theme['vars'] || (utils.config.theme['vars'] = {}))[varName] = extraValue(value); // eslint-disable-line
};
utils.setVars = function (map) {
  for (const varName in map) utils.var(varName, map[varName]);
};
// 设置值有多种方式
// base:"#ff0000"
// base:{dark:"#ff0000",light:"#ffff00"}
// base:{var:"",val:{dark:"#ff0000",light:"#ffff00"}}
utils.one = function (key, k, value) {
  const theme = utils.config.theme[key] || (utils.config.theme[key] = {}); // eslint-disable-line
  //
  if (key === 'vars') {
    theme[k] = extraValue(value);
    return;
  }
  // if (key === 'is') {
  //   for (let kk in value) (theme[k] || (theme[k] = {}))[kk] = value[kk];
  //   return;
  // }
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
  if (value.val) {
    const v = value.var || `--${utils.varKeys[key]}-${k.replace('.', '-')}`;
    map[kk] = `var(${v})`;
    utils.var(v, value.val);
  } else {
    map[kk] = extraValue(value);
  }
};
utils.group = function (key, map) {
  for (const k in map) utils.one(key, k, map[k]);
};
// utils.mix = function (arr) {
//   arr.forEach((args) => {
//     let key = args[0];
//     let k = args[1];
//     let value = args[2];
//     utils.one(key, k, value);
//   });
// };
utils.setAllKeys = function (keys, map) {
  keys.forEach((key) => {
    for (const k in map) utils.one(key, k, map[k]);
  });
};

// base:"#ff0000" | [["#409eff",.7,.1]] | [0, 40, 20, 10, "#409eff", [20,.5,.6 ], 50, 70, 90]
// base:{val:$base}
// base:{val:{ dark:$base, light:$base }}
/**
 * {
      100: { dark: ${},light ${} } ( '#fee2e2' | ['#fee2e2',.7,.1] | 20 | [20,.5,.6] )
      DEFAULT: '#ef4444',
      900: { dark: ${},light ${} } ( '#fee2e2' | ['#fee2e2',.7,.1] | 20 | [20,.5,.6] )
 * }
 */
utils.extraColor = function (prefix, k, value) {
  let defaultColor = value['DEFAULT'];
  if (Array.isArray(defaultColor)) defaultColor = defaultColor[0];
  //
  const map = {};
  for (const key in value) {
    let colorvs = extraValue(value[key]);
    if (!Array.isArray(colorvs)) colorvs = [colorvs];
    let colorMod = parseInt(key, 10) < 500 ? utils.getLightModCSS : utils.getDarkModCSS;

    //map键值
    //设置css变量名
    let cssvn = '--';
    if (prefix) cssvn = `${cssvn}${prefix}-`;
    cssvn = `${cssvn}${k}`;
    if (key !== 'DEFAULT') cssvn = `${cssvn}-${key}`;
    //
    let cval = colorvs[0];
    if (typeof cval === 'string') {
    } else if (typeof cval === 'number') {
      if (key === 'DEFAULT') throw new Error(`${prefix}-${key} invalid default value: ${cval}`);
      cval = colorMod(defaultColor, cval);
    }
    map[`${k}.${key}`] = { var: cssvn, val: cval };

    //alpha
    for (let i = 1; i < colorvs.length; i++) {
      const akey = `a${colorvs[i].toString().replace(/\./g, '')}`;
      const amapkey = key === 'DEFAULT' ? `${k}.${akey}` : `${k}.${key}-${akey}`;
      const acssvn = `${cssvn}-${akey}`;
      const acval = utils.getAlphaModCSS(cval, colorvs[i]);
      //
      map[amapkey] = { var: acssvn, val: acval };
    }
  }
  //console.log(map);
  return map;
};

//primary, secondary, tertiary, quaternary, quinary, senary, septenary, octonary, nonary, and denary
utils.setDefinedTypeColors = function (primary, secondary, success, danger, warning, info, others) {
  utils.setTypeColors({ primary, secondary, success, danger, warning, info, ...others });
};
utils.setTypeColors = function (ts) {
  for (const t in ts) {
    if (ts[t]) utils.setAllKeys(utils.colorKeys, utils.extraColor(undefined, t, ts[t]));
  }
};

utils.setDefinedTextColors = function (main, regular, sub, placeholder, disabled, others) {
  utils.setTextColors({ main, regular, sub, placeholder, disabled, ...others });
};
utils.setTextColors = function (cs) {
  for (const k in cs) {
    if (cs[k]) utils.group(utils.keys.textColor, utils.extraColor(utils.varKeys[utils.keys.textColor], k, cs[k]));
  }
};

utils.setDefinedBgColors = function (main, regular, sub, disabled, others) {
  utils.setBgColors({ main, regular, sub, disabled, ...others });
};
utils.setBgColors = function (cs) {
  for (const k in cs) {
    if (cs[k]) utils.group(utils.keys.backgroundColor, utils.extraColor(utils.varKeys[utils.keys.backgroundColor], k, cs[k]));
  }
};

utils.setDefinedBorderColors = function (main, regular, sub, disabled, others) {
  utils.setBorderColors({ main, regular, sub, disabled, ...others });
};
utils.setBorderColors = function (cs) {
  for (const k in cs) {
    if (cs[k]) utils.group(utils.keys.borderColor, utils.extraColor(utils.varKeys[utils.keys.borderColor], k, cs[k]));
  }
};

// Theme.colors----------------------------------------------------------------------------------------------------------------
utils.getTheme = function (k) {
  let tmp = k.split('.');
  let cur = utils.config.theme[tmp[0]];
  if (!cur) return undefined;
  for (let i = 1; i < tmp.length; i++) {
    cur = cur[tmp[i]];
    if (!cur) return undefined;
  }
  return cur;
};
utils.getColorModCSS = function (a, b, p) {
  return `color-mod(${a} blend(${b} ${p}%))`;
};
utils.getLightModCSS = function (a, p) {
  return `color-mod(${a} blend(${utils.config.theme[utils.keys.colors].white} ${p}%))`;
};
utils.getDarkModCSS = function (a, p) {
  return `color-mod(${a} blend(${utils.config.theme[utils.keys.colors].black} ${p}%))`;
};
//https://www.zhangxinxu.com/wordpress/2010/03/javascript-hex-rgb-hsl-color-convert/
//https://www.digitalocean.com/community/tutorials/css-color-function
utils.getAlphaModCSS = function (a, p) {
  if (p <= 1) p = p * 100;
  return `color-mod(${a} alpha(${p}%))`;
};
//
utils.getColor = function (kk) {
  return utils.getTheme(`${utils.keys.colors}.${kk}`);
};
utils.getTextColor = function (kk) {
  return utils.getTheme(`${utils.keys.textColor}.${kk}`);
};
utils.getBorderColor = function (kk) {
  return utils.getTheme(`${utils.keys.borderColor}.${kk}`);
};
utils.getBackgroundColor = function (kk) {
  return utils.getTheme(`${utils.keys.backgroundColor}.${kk}`);
};
