//import utils class
const path = require('path');
const utils = require('./../lib');
const config = utils.pre('default:dark', { stage: 4 }, undefined);
module.exports = config;

//
utils.addPlugins(
  require('./../lib/tw-plugin-newClasses')([
    // configKey,cssPrefix,css
    // ['backgrounds', 'bg', 'background'],
  ]),
  require('./../lib/tw-plugin-isVariants')({
    autoCollect: false,
    logAutoCollect: true,
    //content: ['./examples/**/*.vue', './examples/**/*.ts'],
    iss: {
      //'is-primary': { 'tw-text-red': { variants: [], responsive: [] } },
    },
  })
);

//colors
//utils.colorKeys.forEach((k) => utils.delete(k));
utils.setAllKeys(utils.colorKeys, { white: '#ffffff', black: '#000000' });
utils.setDefinedTypeColors(
  { val: { dark: [[60, 0.7], 40, 20, 0, ['#2c7be5', 0.5, 0.1], 20, '#ff9800', 70, 90] } },
  '#9d7bd8',
  { val: '#4caf50' },
  { val: [['#3c7be5', 0.5, 0.1]] },
  { val: { dark: [0, 0, 0, 10, '#ff9800', 20, 50, 80, 90] } },
  { val: { dark: [0, 0, 0, 10, '#47bac1', 20, 50, 80, 90] } }
);
utils.setDefinedTextColors(
  { val: { dark: [[60, 0.7], 40, 20, 0, ['#2c7be5', 0.5, 0.1], 20, '#ff9800', 70, 90] } },
  '#9d7bd8',
  { val: '#4caf50' },
  { val: [['#3c7be5', 0.5, 0.1]] },
  { val: { dark: [0, 0, 0, 10, '#ff9800', 20, 50, 80, 90] } }
);
utils.setDefinedBorderColors(
  { val: { dark: [60, 40, 20, 10, '#e6e6e6', 20, 50, 70, 90], light: [60, 40, 20, 10, '#e6e6e6', 20, 50, 70, 90] } },
  '#ffffff',
  '#ffffff'
);
utils.setDefinedBgColors(
  { val: { dark: [60, 40, 20, 10, '#98a6ad', 20, 50, 70, 90], light: [60, 40, 20, 10, '#98a6ad', 20, 50, 70, 90] } },
  '#ffffff',
  '#ffffff',
  '#ffffff',
  {
    body: { val: { dark: '#f9fafe', light: '#f9fafe' } },
    placeholder: { val: { dark: '#f9fafe', light: '98a6ad' } },
  }
);

utils.group(utils.keys.fontSize, {
  test: '100px',
  test2: ['16px', '24px'],
  15: '1.5rem',
});
