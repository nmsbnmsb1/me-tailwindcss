const _ = require('lodash');

module.exports = function() {
  return function({ addUtilities, addComponents, e, prefix, config }) {
    let flexrow = {
      // position: "relative",
      'box-sizing': 'border-box',
      display: 'flex',
      'flex-direction': 'row',
    };
    let flexcol = {
      // position: "relative",
      'box-sizing': 'border-box',
      display: 'flex',
      'flex-direction': 'column',
    };
    // addComponents(
    //   {
    //     "@variants responsive": {
    //       [`${prefix(`.flexrow`)}.c-c`]: { ...flexrow }
    //     }
    //   },
    //   { respectPrefix: false }
    // );

    //
    let x = {
      s: { 'justify-content': 'flex-start' },
      c: { 'justify-content': 'center' },
      e: { 'justify-content': 'flex-end' },
      bet: { 'justify-content': 'space-between' },
      ard: { 'justify-content': 'space-around' },
    };
    let y = {
      s: { 'align-items': 'flex-start' },
      c: { 'align-items': 'center' },
      e: { 'align-items': 'flex-end' },
      sth: { 'align-items': 'stretch' },
      bs: { 'align-items': 'baseline' },
    };
    //
    // [`.${e(`flexrow-${x}-${y}`)}`]: {}
    for (let xx in x) {
      for (let yy in y) {
        addUtilities(
          {
            [`.flexrow-${xx}-${yy}`]: {
              ...flexrow,
              ...x[xx],
              ...y[yy],
            },
          },
          ['responsive']
        );
      }
    }
    for (let yy in y) {
      for (let xx in x) {
        addUtilities(
          {
            [`.flexcol-${yy}-${xx}`]: {
              ...flexcol,
              ...y[yy],
              ...x[xx],
            },
          },
          ['responsive']
        );
      }
    }
  };
};
