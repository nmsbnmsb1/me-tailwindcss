/// 生成css变量
module.exports = function() {
  return function({ addComponents, config }) {
    let root = {};
    let map = config('theme.vars');
    for (let varName in map) {
      let value = map[varName];
      if (typeof value === 'function') value = value();
      else if (Array.isArray(value)) value = value.join(',');
      root[`${varName}`] = value;
    }
    addComponents({ ':root': root });
  };
};
