//import utils class
const path = require('path');
const utils = require('./../lib');
const config = utils.pre('default:dark', false, undefined);
module.exports = config;

//
utils.addPlugins(
  require('./../lib/tw-plugin-flex')(),
  require('./../lib/tw-plugin-newClasses')([
    // configKey,cssPrefix,css
    ['backgroundImages', 'bg-image', 'background-image'],
    ['backgrounds', 'bg', 'background'],
  ])
);

//colors
utils.setDefinedTypeColors(
  { var: '', val: { dark: [60, 40, 20, 10, '#2c7be5', 20, 50, 70, 90] } },
  { var: '', val: { dark: [60, 40, 20, 10, '#9d7bd8', 20, 50, 70, 90] } },
  { var: '', val: { dark: [0, 0, 0, 10, '#4caf50', 20, 50, 80, 90] } },
  { var: '', val: { dark: [0, 0, 0, 10, '#e51c23', 20, 50, 80, 90] } },
  { var: '', val: { dark: [0, 0, 0, 10, '#ff9800', 20, 50, 80, 90] } },
  { var: '', val: { dark: [0, 0, 0, 10, '#47bac1', 20, 50, 80, 90] } }
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
