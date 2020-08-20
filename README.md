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

./tw.config.js

```js
//import utils class
const path = require('path');
const utils = require('me-tailwindcss');
const config = utils.pre('default:dark');
module.exports = config;

//
utils.addPlugins(
  require('me-tailwindcss/lib/tw-plugin-newClasses')([
    // configKey,cssPrefix,css
    ['backgroundImages', 'bg-image', 'background-image'],
    ['backgrounds', 'bg', 'background'],
  ]),
  require('me-tailwindcss/lib/tw-plugin-isVariants')({
    autoCollect: false,
    logAutoCollect: true,
    //content: ['./examples/**/*.vue', './examples/**/*.ts'],
    iss: {
      //'is-primary': { 'tw-text-red': { variants: [], responsive: [] } },
    },
  })
);

//add some config
/* Screen -----------------------------------------------------------------------    */
utils.delete(utils.keys.screens);
utils.group(utils.keys.screens, {
  sm: { max: '991px' },
  lg: '992px',
});

/* Sizes -----------------------------------------------------------------------    */
utils.setAllKeys(utils.spacingKeys, {
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
utils.setDefinedTypeColors(
  { val: { dark: [[60, 0.7], 40, 20, 0, ['#2c7be5', 0.5, 0.1], 20, '#ff9800', 70, 90] } },
  '#9d7bd8',
  { val: '#4caf50' },
  { val: [['#3c7be5', 0.5, 0.1]] },
  { val: { dark: [0, 0, 0, 10, '#ff9800', 20, 50, 80, 90] } },
  { val: { dark: [0, 0, 0, 10, '#47bac1', 20, 50, 80, 90] } }
);
utils.setDefinedTextColors(
  { var: '', val: { dark: [60, 40, 20, 10, '#737b81', 20, 50, 70, 90], light: [60, 40, 20, 10, '#737b81', 20, 50, 70, 90] } },
  '#ffffff',
  '#ffffff',
  { var: '', val: { dark: [60, 40, 20, 10, '#98a6ad', 20, 50, 70, 90], light: [60, 40, 20, 10, '#98a6ad', 20, 50, 70, 90] } },
  '#ffffff'
);
utils.setDefinedBorderColors(
  { var: '', val: { dark: [60, 40, 20, 10, '#e6e6e6', 20, 50, 70, 90], light: [60, 40, 20, 10, '#e6e6e6', 20, 50, 70, 90] } },
  '#ffffff',
  '#ffffff'
);
utils.setDefinedBgColors(
  { var: '', val: { dark: [60, 40, 20, 10, '#98a6ad', 20, 50, 70, 90], light: [60, 40, 20, 10, '#98a6ad', 20, 50, 70, 90] } },
  '#ffffff',
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
node ./node_modules/tailwincss-utils/lib/cmd-inspect-tw-config.js --input ./tw.config.js --output ./tw.config.json
```

./package.json

```json
{
  "scripts": {
    "tw": "inspect-tw-config --input ./tw.config.js --output ./tw.config.json"
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
      tw: './tw.config.js',
      purge: {}, // set false to disable purge-css
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

##### pre(theme, options = {}, parentConfig = undefined)

```js
/**
 * Initialize tailwindcss config object.
 *
 * Add default option to all colors.
 * Set textColors/borderColors/backgroundColors = colors
 * Set width/height/minWidth/minHeight/maxWidth/maxHeight/padding/margin = spacing
 * Set separator = ":" and prefix = "tw-".It's for remove unused css classes with postcss-plugin-purgecss
 *
 * @param {string} theme Theme name. use 'default:' prefix to set theme as default. eg: "default:dark".If theme is default,the output css will have full css classes.otherwise it will only contains css variables.
 * @param {boolean=false} options prefix = 'tw-', separator = ':', important = false, target = 'relaxed'
 * @param {string} parentConfig Tailwindcss config file path relative to the project root path. Pass 'undefined' will use default config.
 * @return {object} tailwindcss config object.
 */
utils.pre(theme, (options = {}), (parentConfig = undefined));
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

##### setAllKeys(keys,map)

```js
/**
 * Set to colors/textColors/borderColors/backgroundColors
 *
 * @param {string} keys See utils.colorKeys/utils.spacingKeys/utils.opacityKeys
 * @param {[name:string]:number | string | { [theme:string]:number|string } | { var:string,val:number | string | { [theme:string]:number|string }}} map.
 */
utils.setAllKeys(keys, map);
```

##### setDefinedTextColors(mainly, regular, ordinary, placeholder, disabled, others)

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
 * @example [[60, 0.7], 40, 20, 0, ['#2c7be5', 0.5, 0.1], 20, '#ff9800', 70, 90].
 *          if value == 0 || value === undefined then ignore
 *          index 4 is default color.it should be a color string.
 *          if value is color string,then it will be set this color
 *          if value is number.
 *          index 0-3 will use dark-mod base on index 4 color. like `color-mod(#409eff blend(#000000} 10%))`
 *            #000000 is defined in colors.black.see example below
 *          index 5-8 will use light-mod base on index 4 color.like `color-mod(#409eff blend(#ffffff} 20%))`
 *            #ffffff is defined in colors.white.see example below
 *          value can be a array,first value is color string or number,next can set alpha value
 *
 * 4.css-varible-style.
 * @example {var:"--text-mainly",val{dark:"#000000",light:"#ffffff"}}
 *          {var:"--text-mainly",val:[60, 40, 20, 10, "#409eff", 20, 50, 70, 90]}
 *          {var:"--text-mainly",val:{dark:[60, 40, 20, 10, "#409eff", 20, 50, 70, 90],light:"#ffffff"}}}
 *
 * @param {any} mainly. mainly color
 * @param {any} regular. regular color
 * @param {any} ordinary. ordinary color
 * @param {any} placeholder. placeholder color
 * @param {any} disabled. disabled color
 * @param {[k:string]:anyr} others. others...
 */
utils.setDefinedTextColors(mainly, regular, ordinary, placeholder, disabled, others);
```

examples

```js
utils.setDefinedTextColors({
  var: '',
  val: {
    dark: [[60, 0.7], 40, 20, 0, ['#2c7be5', 0.5, 0.1], 20, '#ff9800', 70, 90],
    light: [[60, 0.7], 40, 20, 0, ['#2c7be5', 0.5, 0.1], 20, '#ff9800', 70, 90],
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
          "100": "var(--text-color-mainly-100)",
          "200": "var(--text-color-mainly-200)",
          "300": "var(--text-color-mainly-300)",
          "600": "var(--text-color-mainly-600)",
          "700": "var(--text-color-mainly-700)",
          "800": "var(--text-color-mainly-800)",
          "900": "var(--text-color-mainly-900)",
          "100-07": "var(--text-color-mainly-100-07)",
          "default": "var(--text-color-mainly)",
          "05": "var(--text-color-mainly-05)",
          "01": "var(--text-color-mainly-01)"
        }
    },
    "vars": {
      "--text-color-mainly-100": "color-mod(#2c7be5 blend(#ffffff 60%))",
			"--text-color-mainly-100-07": "color-mod(color-mod(#2c7be5 blend(#ffffff 60%)) alpha(70%))",
			"--text-color-mainly-200": "color-mod(#2c7be5 blend(#ffffff 40%))",
			"--text-color-mainly-300": "color-mod(#2c7be5 blend(#ffffff 20%))",
			"--text-color-mainly": "#2c7be5",
			"--text-color-mainly-05": "color-mod(#2c7be5 alpha(50%))",
			"--text-color-mainly-01": "color-mod(#2c7be5 alpha(10%))",
			"--text-color-mainly-600": "color-mod(#2c7be5 blend(#000000 20%))",
			"--text-color-mainly-700": "#ff9800",
			"--text-color-mainly-800": "color-mod(#2c7be5 blend(#000000 70%))",
			"--text-color-mainly-900": "color-mod(#2c7be5 blend(#000000 90%))",
    }
  }
```

The output of ./theme-dark.css will be

```css
:root {
  --text-color-mainly-100: rgb(171, 202, 245);
  --text-color-mainly-100-07: rgba(171, 202, 245, 0.7);
  --text-color-mainly-200: rgb(128, 176, 239);
  --text-color-mainly-300: rgb(86, 149, 234);
  --text-color-mainly: #2c7be5;
  --text-color-mainly-05: rgba(44, 123, 229, 0.5);
  --text-color-mainly-01: rgba(44, 123, 229, 0.1);
  --text-color-mainly-600: rgb(35, 98, 183);
  --text-color-mainly-700: #ff9800;
  --text-color-mainly-800: rgb(13, 37, 69);
  --text-color-mainly-900: rgb(4, 12, 23);
}

.tw-text-mainly {
  color: #2c7be5;
  color: var(--text-color-mainly);
}
...
```

##### setDefinedBorderColors(mainly, regular, ordinary, disabled, others)

```js
/**
 * @param {any} mainly. mainly color
 * @param {any} regular. regular color
 * @param {any} disabled. disabled color
 * @param {[name:string]:anyr} others. others...
 */
utils.setDefinedBorderColors(mainly, regular, ordinary, disabled, others);
```

##### setDefinedBgColors(mainly, regular, ordinary, disabled, others)

```js
/**
 * @param {any} mainly. mainly color
 * @param {any} regular. regular color
 * @param {any} disabled. disabled color
 * @param {[name:string]:anyr} others. others...
 */
utils.setDefinedBgColors(mainly, regular, ordinary, disabled, others);
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

##### setDefinedTypeColors(primary, secondary, success, danger, warning, info, others)

##### getTheme(key, k)

##### getColorModCSS(a, b, p)

##### getLightModCSS(a, p)

##### getDarkModCSS(a, p)

##### getColor(k)

##### getTextColor(k)

##### getBorderColor(k)

##### getBackgroundColor(k)
