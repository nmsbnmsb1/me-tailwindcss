const utils = require('./../lib');
module.exports = utils.pre('default:dark', undefined, undefined);

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

utils.group(utils.keys.fontSize, {
  test: '100px',
  test2: ['16px', '24px'],
  15: '1.5rem',
});
