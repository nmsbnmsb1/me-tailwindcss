//import utils class
const utils = require('./../lib');
const config = utils.pre(undefined, 'default:dark');
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
//now it's time to add some config
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
