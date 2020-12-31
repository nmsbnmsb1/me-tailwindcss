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
const config = utils.pre('default:dark', undefined, undefined);
module.exports = config;

//
// utils.addPlugins(
//   require('me-tailwindcss/lib/tw-plugin-newClasses')([
//     // configKey,cssPrefix,css
//     ['backgroundImages', 'bg-image', 'background-image'],
//     ['backgrounds', 'bg', 'background'],
//   ]),
//   require('me-tailwindcss/lib/tw-plugin-isVariants')({
//     autoCollect: false,
//     logAutoCollect: true,
//     //content: ['./examples/**/*.vue', './examples/**/*.ts'],
//     iss: {
//       //'is-primary': { 'tw-text-red': { variants: [], responsive: [] } },
//     },
//   })
// );

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
  2: '2px',
  3: '3px',
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
//colors
utils.setAllKeys(utils.colorKeys, { white: '#ffffff', black: '#000000' });
utils.setDefinedTypeColors({
  100: { dark: [60, 0.7] },
  200: { dark: 40 },
  300: 20,
  DEFAULT: ['#2c7be5', 0.5, 0.1],
  600: 20,
  700: '#ff9800',
  800: 70,
  900: 90,
});
utils.setDefinedTextColors({ 100: [60, 0.7], 200: 40, 300: 20, DEFAULT: ['#2c7be5', 0.5, 0.1], 600: 20, 700: '#ff9800', 800: 70, 900: 90 });
utils.setDefinedBorderColors(
  { 100: [60, 0.7], 200: 40, 300: 20, DEFAULT: ['#e6e6e6', 0.5, 0.1], 600: 20, 700: '#ffff00', 800: 70, 900: 90 },
  { DEFAULT: '#ffffff' }
);
utils.setDefinedBgColors(
  { 100: [60, 0.7], 200: 40, 300: 20, DEFAULT: ['#e6e6e6', 0.5, 0.1], 600: 20, 700: '#ffff00', 800: 70, 900: 90 },
  { DEFAULT: '#ffffff' },
  { DEFAULT: '#ffffff' },
  { DEFAULT: '#ffffff' },
  {
    body: { DEFAULT: { dark: '#f9fafe', light: '#f9fafe' } },
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
      tw: {
        path: './tw.config.js',
        //set taildwindcss config
        purge: {
          enabled: true,
          //mode: 'all',
          preserveHtmlElements: true,
          layers: ['components', 'utilities'],
          content: [
            './public/**/*.html',
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.ts',
            './examples/**/*.vue',
            './examples/**/*.js',
            './examples/**/*.ts',
          ],
        },
      },
      purge: false, // set false to disable purge-css
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

##### setDefinedTextColors(main, regular, sub, placeholder, disabled, others)

```js
/**
 * @example {
 *            100: { dark: ( '#fee2e2' | ['#fee2e2',.7,.1] | 20 | [20,.5,.6] ),light ( '#fee2e2' | ['#fee2e2',.7,.1] | 20 | [20,.5,.6] ) }
 *            DEFAULT: '#ef4444',
 *            900: { dark: ( '#fee2e2' | ['#fee2e2',.7,.1] | 20 | [20,.5,.6] ),light ( '#fee2e2' | ['#fee2e2',.7,.1] | 20 | [20,.5,.6] ) }
 *          }
 *
 * @param {any} main. main color
 * @param {any} regular. regular color
 * @param {any} sub. sub color
 * @param {any} placeholder. placeholder color
 * @param {any} disabled. disabled color
 * @param {[k:string]:anyr} others. others...
 */
utils.setDefinedTextColors(main, regular, sub, placeholder, disabled, others);
```

examples

```js
utils.setDefinedTextColors({ 100: [60, 0.7], 200: 40, 300: 20, DEFAULT: ['#2c7be5', 0.5, 0.1], 600: 20, 700: '#ff9800', 800: 70, 900: 90 });
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
        "main": {
          "100": "var(--text-main-100)",
          "200": "var(--text-main-200)",
          "300": "var(--text-main-300)",
          "600": "var(--text-main-600)",
          "700": "var(--text-main-700)",
          "800": "var(--text-main-800)",
          "900": "var(--text-main-900)",
          "100-a07": "var(--text-main-100-a07)",
          "DEFAULT": "var(--text-main)",
          "a05": "var(--text-main-a05)",
          "a01": "var(--text-main-a01)"
			  }
    },
    "vars": {
        "--text-main-100": "color-mod(#2c7be5 blend(#ffffff 60%))",
        "--text-main-100-a07": "color-mod(color-mod(#2c7be5 blend(#ffffff 60%)) alpha(70%))",
        "--text-main-200": "color-mod(#2c7be5 blend(#ffffff 40%))",
        "--text-main-300": "color-mod(#2c7be5 blend(#ffffff 20%))",
        "--text-main-600": "color-mod(#2c7be5 blend(#000000 20%))",
        "--text-main-700": "#ff9800",
        "--text-main-800": "color-mod(#2c7be5 blend(#000000 70%))",
        "--text-main-900": "color-mod(#2c7be5 blend(#000000 90%))",
        "--text-main": "#2c7be5",
        "--text-main-a05": "color-mod(#2c7be5 alpha(50%))",
        "--text-main-a01": "color-mod(#2c7be5 alpha(10%))",
    }
  }
```

The output of ./theme-dark.css will be

```css
:root {
  --text-main-100: rgb(171, 202, 245);
  --text-main-100-a07: rgba(171, 202, 245, 0.7);
  --text-main-200: rgb(128, 176, 239);
  --text-main-300: rgb(86, 149, 234);
  --text-main-600: rgb(35, 98, 183);
  --text-main-700: #ff9800;
  --text-main-800: rgb(13, 37, 69);
  --text-main-900: rgb(4, 12, 23);
  --text-main: #2c7be5;
  --text-main-a05: rgba(44, 123, 229, 0.5);
  --text-main-a01: rgba(44, 123, 229, 0.1);
}

.tw-text-main {
  color: var(--text-main);
}
...
```

##### setDefinedBorderColors(main, regular, sub, disabled, others)

```js
/**
 * @param {any} main. mainly color
 * @param {any} regular. regular color
 * @param {any} disabled. disabled color
 * @param {[name:string]:anyr} others. others...
 */
utils.setDefinedBorderColors(main, regular, sub, disabled, others);
```

##### setDefinedBgColors(main, regular, sub, disabled, others)

```js
/**
 * @param {any} mainly. mainly color
 * @param {any} regular. regular color
 * @param {any} disabled. disabled color
 * @param {[name:string]:anyr} others. others...
 */
utils.setDefinedBgColors(main, regular, sub, disabled, others);
```

##### setTypeColor(type, color)

##### setDefinedTypeColors(primary, secondary, success, danger, warning, info, others)

##### getTheme(key)

##### getColorModCSS(a, b, p)

##### getLightModCSS(a, p)

##### getDarkModCSS(a, p)

##### getColor(k)

##### getTextColor(k)

##### getBorderColor(k)

##### getBackgroundColor(k)
