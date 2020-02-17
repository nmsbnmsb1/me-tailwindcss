const _ = require('lodash');

module.exports = function(keys) {
  return function({ addUtilities, e, config }) {
    keys.forEach((val, index) => {
      let configKey = val[0] || val.configKey;
      let cssPrefix = val[1] || val.classPrefix || configKey;
      let fn = val[3] || val.classFn;
      if (!fn) {
        fn = (configVal) => {
          return { [val[2] || val.css]: configVal };
        };
      }
      //
      let utilities = _.map(config(`theme.${configKey}`), (val, name) => ({
        [`.${e(`${cssPrefix}-${name}`)}`]: {
          ...fn(val),
        },
      }));
      // console.log(utilities);
      let variants = config(`variants.${configKey}`) || val[4] || val.variants || ['responsive', 'hover', 'focus', 'active'];
      addUtilities(utilities, variants);
    });
  };
};
