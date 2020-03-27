# me-tailwindcss

> A utility to build css files depend on [TailwindCSS](https://tailwindcss.com/).

## Features

- an API for set [TailwindCSS](https://tailwindcss.com/) config.js
- some [TailwindCSS](https://tailwindcss.com/) plugins
- more color and size config api
- postcss config
- independent css build command

## Example

### create config js

./tw-config.js

```js
//import utils class
const path = require('path');
const utils = require('me-tailwindcss');
const config = utils.pre(undefined, 'default:dark', false);
module.exports = config;

//
utils.addPlugins(
  require('me-tailwindcss/lib/tw-plugin-flex')(),
  require('me-tailwindcss/lib/tw-plugin-newClasses')([
    // configKey,cssPrefix,css
    ['backgroundImages', 'bg-image', 'background-image'],
    ['backgrounds', 'bg', 'background'],
  ])
);

//add some config
/* Screen -----------------------------------------------------------------------    */
utils.delete(utils.keys.screens);
utils.group(utils.keys.screens, {
  sm: { max: '991px' },
  lg: '992px',
});

/* Sizes -----------------------------------------------------------------------    */
utils.setAllSpacing({
  '-2': '-2px',
  '-4': '-4px',
  '2': '2px',
  '3': '3px',
  '10%': '10%',
});

/* TextSize -----------------------------------------------------------------------    */
utils.group(utils.keys.fontSize, {
  xss: '10px',
  base: '14px',
  num: '6rem',
});

/* Box-Shadow -----------------------------------------------------------------------    */
utils.group(utils.keys.boxShadow, {
  base: {
    var: '',
    val: {
      dark: '0 0 35px 0 rgba(154, 161, 171, 0.15)',
      light: '0 0 35px 0 rgba(154, 161, 171, 0.15)',
    },
  },
});

/* Text-Colors -----------------------------------------------------------------------    */
utils.setDefinedTextColors(
  {
    var: '',
    val: {
      dark: [60, 40, 20, 10, '#737b81', 20, 50, 70, 90],
      light: [60, 40, 20, 10, '#737b81', 20, 50, 70, 90],
    },
  },
  '#ffffff',
  '#ffffff',
  {
    var: '',
    val: {
      dark: [60, 40, 20, 10, '#98a6ad', 20, 50, 70, 90],
      light: [60, 40, 20, 10, '#98a6ad', 20, 50, 70, 90],
    },
  },
  '#ffffff'
);
utils.setDefinedBorderColors(
  {
    var: '',
    val: {
      dark: [60, 40, 20, 10, '#e6e6e6', 20, 50, 70, 90],
      light: [60, 40, 20, 10, '#e6e6e6', 20, 50, 70, 90],
    },
  },
  '#ffffff',
  '#ffffff'
);
utils.setDefinedBgColors(
  {
    var: '',
    val: {
      dark: [60, 40, 20, 10, '#98a6ad', 20, 50, 70, 90],
      light: [60, 40, 20, 10, '#98a6ad', 20, 50, 70, 90],
    },
  },
  '#ffffff',
  '#ffffff',
  {
    body: { var: '', val: { dark: '#f9fafe', light: '#f9fafe' } },
    placeholder: { var: '', val: { dark: '#f9fafe', light: '98a6ad' } },
  }
);
```

### create css

./index.css

```css
@import 'me-tailwindcss/lib/base';

/* purgecss start ignore */
@import './example1.css';
/* purgecss end ignore */
@import './example2.css';

@import 'me-tailwindcss/lib/tw';
```

> **NOTE:** import any css files between "base.css" and "tw.css" so that the tailwindcss-utilities-classes can override those defined before them.

> **NOTE:** add "purgecss start ignore" and "purgecss end ignore" to disable purge-css.

### inspect config

```bash
node ./node_modules/tailwincss-utils/lib/cmd-inspect-tw-config.js --input ./tw-config.js --output ./tw-config.json
```

./package.json

```json
{
  "scripts": {
    "tw": "inspect-tw-config --input ./tw-config.js --output ./tw-config.json"
  }
}
```

### postcss

./postcss.config.js

```js
const path = require('path');

module.exports = {
  plugins: [
    ...require('me-tailwindcss/lib/postcss-config')({
      tw: './tw-config.js',
      purge: true,
      mini: false,
    }),
  ],
};
```

### build css

```bash
node ./node_modules/tailwincss-utils/lib/exec-build-css.js --input ./index.css --output ./theme-dark.css  --postcss ./postcss.config.js
```

./package.json

```json
{
  "scripts": {
    "css": "build-css --input ./index.css --output ./theme-dark.css  --postcss ./postcss.config.js"
  }
}
```

### html

```html
<div class="tw-text-xss tw-text-mainly">字体1</div>
<div class="tw-text-xss tw-text-mainly-200">字体2</div>
```

## API

##### pre(baseConfigAbsPath, theme, important = false)

```js
/**
 * Initialize tailwindcss config object.
 *
 * Add default option to all colors.
 * Set textColors/borderColors/backgroundColors = colors
 * Set width/height/minWidth/minHeight/maxWidth/maxHeight/padding/margin = spacing
 * Set separator = ":" and prefix = "tw-".It's for remove unused css classes with postcss-plugin-purgecss
 *
 * @param {string="tw-config-1.1.4.js"} baseConfigAbsPath Tailwindcss config file path relative to the project root path. Pass 'undefined' will use default config.
 * @param {string} theme Theme name. use 'default:' prefix to set theme as default. eg: "default:dark".If theme is default,the output css will have full css classes.otherwise it will only contains css variables.
 * @param {boolean=false} important same as Tailwindcss important option.
 * @return {object} tailwindcss config object.
 */
utils.pre(baseConfigAbsPath, theme, (important = false));
```

##### one(key, k, value)

```js
/**
 * Set one config
 *
 * value can be set as
 * 1.normal-style.
 * @example "#ffffff"| 12
 *
 * 2.theme-style.
 * @example { dark: '#f9fafe', light: '#f9fafe' }
 *
 * 3.css-varible-style.
 * @example { var: '--text-body', val: { dark: '#000000', light: '#ffffff' } }
 *
 * @param {string} key See utils.keys
 * @param {string} k name of the config.use '.' for complicated object. eg: "gray.400"
 * @param {number | string | { [theme:string]:number|string } | { var:string,val:number | string | { [theme:string]:number|string }}} value.
 */
utils.one(key, k, value);
```

##### group(key, map)

```js
/**
 * Set a group config.
 *
 * @param {string} key See utils.keys
 * @param {[name:string]:number | string | { [theme:string]:number|string } | { var:string,val:number | string | { [theme:string]:number|string }}} map.
 */
utils.group(key, map);
```

##### setAllColors(map)

```js
/**
 * Set to colors/textColors/borderColors/backgroundColors
 *
 * @param {[name:string]:number | string | { [theme:string]:number|string } | { var:string,val:number | string | { [theme:string]:number|string }}} map.
 */
utils.setAllColors(map);
```

##### setAllSpacing(map)

```js
/**
 * Set to spacing/width/height/minWidth/minHeight/maxWidth/maxHeight/padding/margin
 *
 * @param {[name:string]:number | string | { [theme:string]:number|string } | { var:string,val:number | string | { [theme:string]:number|string }}} map.
 */
utils.setAllSpacing(map);
```

##### setDefinedTextColors(mainly, regular, secondary, placeholder, disabled, others)

```js
/**
 * Different ways to set color
 *
 * 1.normal.
 * @example "#ffffff"
 *
 * 2.theme-style.
 * @example  {dark:"#000000",light:"#ffffff"}
 *
 * 3.color-level-style.
 * @example [0, 40, 20, 10, "#409eff", 20, "#ff0000", 70, 90].
 *          if value == 0 || value === undefined then ignore
 *          index 4 is default color.it should be a color string.
 *          if value is color string,then it will be set this color
 *          if value is number.
 *          index 0-3 will use dark-mod base on index 4 color. like `color-mod(#409eff blend(#000000} 10%))`
 *            #000000 is defined in colors.black.see example below
 *          index 5-8 will use light-mod base on index 4 color.like `color-mod(#409eff blend(#ffffff} 20%))`
 *            #ffffff is defined in colors.white.see example below
 *
 * 4.css-varible-style.
 * @example {var:"--text-mainly",val{dark:"#000000",light:"#ffffff"}}
 *          {var:"--text-mainly",val:[60, 40, 20, 10, "#409eff", 20, 50, 70, 90]}
 *          {var:"--text-mainly",val:{dark:[60, 40, 20, 10, "#409eff", 20, 50, 70, 90],light:"#ffffff"}}}
 *
 * @param {any} mainly. mainly color
 * @param {any} regular. regular color
 * @param {any} secondary. secondary color
 * @param {any} placeholder. placeholder color
 * @param {any} disabled. disabled color
 * @param {[k:string]:anyr} others. others...
 */
utils.setDefinedTextColors(mainly, regular, secondary, placeholder, disabled, others);
```

examples

```js
utils.setDefinedTextColors({
  var: '',
  val: {
    dark: [60, 40, 20, 10, '#737b81', 20, 50, 70, 90],
    light: [60, 40, 20, 10, '#737b81', 20, 50, 70, 90],
  },
});
```

The output of ./tw-config.js will be

```json
{
  "theme": {
    "colors": {
      "black": "#000",
      "white": "#fff",
    },
    "textColor":{
        "mainly": {
          "100": "var(--text-mainly-100)",
          "200": "var(--text-mainly-200)",
          "300": "var(--text-mainly-300)",
          "400": "var(--text-mainly-400)",
          "600": "var(--text-mainly-600)",
          "700": "var(--text-mainly-700)",
          "800": "var(--text-mainly-800)",
          "900": "var(--text-mainly-900)",
          "default": "var(--text-mainly)"
        }
    },
    "vars": {
      "--text-mainly": "#737b81",
      "--text-mainly-100": "color-mod(#737b81 blend(#000 60%))",
      "--text-mainly-200": "color-mod(#737b81 blend(#000 40%))",
      "--text-mainly-300": "color-mod(#737b81 blend(#000 20%))",
      "--text-mainly-400": "color-mod(#737b81 blend(#000 10%))",
      "--text-mainly-600": "color-mod(#737b81 blend(#fff 20%))",
      "--text-mainly-700": "color-mod(#737b81 blend(#fff 50%))",
      "--text-mainly-800": "color-mod(#737b81 blend(#fff 70%))",
      "--text-mainly-900": "color-mod(#737b81 blend(#fff 90%))"
    }
  }
```

The output of ./theme-dark.css will be

```css
:root {
  --text-mainly: #737b81;
  --text-mainly-100: rgb(46, 49, 52);
  --text-mainly-200: rgb(69, 74, 77);
  --text-mainly-300: rgb(92, 98, 103);
  --text-mainly-400: rgb(104, 111, 116);
  --text-mainly-600: rgb(143, 149, 154);
  --text-mainly-700: rgb(185, 189, 192);
  --text-mainly-800: rgb(213, 215, 217);
  --text-mainly-900: rgb(241, 242, 242);
}

.tw-text-mainly {
  color: #737b81;
  color: var(--text-mainly);
}
...
```

##### setDefinedBorderColors(mainly, regular, secondary, disabled, others)

```js
/**
 * @param {any} mainly. mainly color
 * @param {any} regular. regular color
 * @param {any} secondary. secondary color
 * @param {any} disabled. disabled color
 * @param {[name:string]:anyr} others. others...
 */
utils.setDefinedBorderColors(mainly, regular, secondary, disabled, others);
```

##### setDefinedBgColors(mainly, regular, secondary, disabled, others)

```js
/**
 * @param {any} mainly. mainly color
 * @param {any} regular. regular color
 * @param {any} secondary. secondary color
 * @param {any} disabled. disabled color
 * @param {[name:string]:anyr} others. others...
 */
utils.setDefinedBgColors(mainly, regular, secondary, disabled, others);
```

##### setTypeColor(type, color)

```js
/**
 * Set color to colors/textColor/borderColor/backgroundColor
 *
 * @param {string} type.
 * @param {any} color.
 */
utils.setTypeColor(type, color);
```

examples

```js
utils.setTypeColor('success', {
  var: '',
  val: {
    dark: [0, 0, 0, 0, '#67C23A', 0, 0, 0, 0],
    light: [0, 0, 0, 0, '#67C23A', 0, 0, 0, 0],
  },
});
```

The output of ./tw-config.js will be

```json
{
  "theme": {
    "colors": {
      "success": { "default": "var(--success)" }
    },
    "textColor":{
      "success": { "default": "var(--success)" }
    },
    "borderColor":{
      "success": { "default": "var(--success)" }
    },
    "backgroundColor":{
      "success": { "default": "var(--success)" }
    },
    "vars": { "--success": "#67C23A" }
  }
```

The output of ./theme-dark.css will be

```css
:root {
  --success: #67c23a;
}
.tw-text-success {
  color: #67c23a;
  color: var(--success);
}
.tw-border-success {
  border-color: #67c23a;
  border-color: var(--success);
}
.tw-bg-success {
  background-color: #67c23a;
  background-color: var(--success);
}
```

##### getTheme(key, k)

##### getColorModCSS(a, b, p)

##### getLightModCSS(a, p)

##### getDarkModCSS(a, p)

##### getColor(k)

##### getTextColor(k)

##### getBorderColor(k)

##### getBackgroundColor(k)
