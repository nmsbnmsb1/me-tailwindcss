//base
function defaultExtract(content, reg) {
  let list = [];
  let m;
  while ((m = reg.exec(content)) !== null) {
    if (m.index === reg.lastIndex) reg.lastIndex++;
    list.push(m[0]);
  }
  // console.log(list);
  return list;
}

function createExtractor(regOrFn, extensions = ['html', 'ts', 'js']) {
  return {
    extractor: typeof regOrFn === 'function' ? regOrFn : (content) => defaultExtract(content, regOrFn),
    extensions,
  };
}

// const cssModule = /\$style\.[A-Za-z0-9_]+/gm;
function createVueExtractor(regOrFn, extensions = ['vue']) {
  return {
    extractor: (content) => {
      let list = [];

      // 只提取template/script部分
      const templateRegx = /<template[\s\S]*<\/template>/gm;
      let mTemplate = templateRegx.exec(content);
      if (mTemplate) {
        if (typeof regOrFn === 'function') {
          list = list.concat(regOrFn(mTemplate[0]));
        } else {
          list = list.concat(defaultExtract(mTemplate[0]), regOrFn);
        }
        // list = list.concat(cssModuleClassExtract(mTemplate[0]));
      }

      const scriptRegx = /<script[\s\S]*<\/script>/gm;
      let mScript = scriptRegx.exec(content);
      if (mScript) {
        if (typeof regOrFn === 'function') {
          list = list.concat(regOrFn(mScript[0]));
        } else {
          list = list.concat(defaultExtract(mScript[0]), regOrFn);
        }
        // list = list.concat(cssModuleClassExtract(mScript[0]));
      }
      // console.log(list);
      return list;
    },
    extensions,
  };
}

// function cssModuleClassExtract(content) {
//   let list = [];
//   let m;
//   while ((m = cssModule.exec(content)) !== null) {
//     if (m.index === cssModule.lastIndex) {
//       cssModule.lastIndex++;
//     }
//     list.push(m[0].replace('$style.', ''));
//   }
//   // console.log(list);
//   return list;
// }

// tw-XX(-XXX)?
// lg:tw-XX(-XXX)?
const tw = /([a-z-]{2,}:){0,3}tw\-([-]?[a-z0-9%\/]+)(\-[a-z0-9%\/]+){0,}/gm; // eslint-disable-line

function tailwindcssExtract(content) {
  let list = [];
  let m;
  while ((m = tw.exec(content)) !== null) {
    if (m.index === tw.lastIndex) tw.lastIndex++;
    // 不是tw-这种格式的
    if (!m[0].endsWith('-')) {
      list.push(m[0]);
    }
  }
  // console.log(list);
  return list;
}

module.exports = {
  //base
  createExtractor,
  createVueExtractor,
  //tw
  tailwindcssExtract,
  purgeTw: createExtractor(tailwindcssExtract),
  purgeVueTw: createVueExtractor(tailwindcssExtract),
};
