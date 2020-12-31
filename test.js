const utils = require('./lib');
utils.pre('dark');
utils.extraColor('text', 'primary', {
  100: { dark: [10, 0.7, 0.1] },
  DEFAULT: ['#f87171', 0.1, 0.2],
  900: { dark: 90 },
});
