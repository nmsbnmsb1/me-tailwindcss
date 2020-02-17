const fs = require('fs');
const glob = require('glob');
// const postcss = require("postcss");
const definedVariantNames = ['responsive', 'hover', 'focus', 'active', 'group-hover', 'focus-within'];

// 自动搜索引用的类
const isVariants = /(is\-[a-z]+:)([a-z]{2,}:){0,2}tw\-([-]?[a-z0-9%\/]+)(\-[a-z0-9%\/]+){0,}/gm; // eslint-disable-line

const defaultContent = ['./public/**/*.html', './src/**/*.vue', './src/**/*.ts'];
const collectClasses = function(to, globfile) {
  let filesnames = glob.sync(globfile);
  let classNameMap = {};
  filesnames.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = isVariants.exec(content)) !== null) {
      if (m.index === isVariants.lastIndex) isVariants.lastIndex++;
      // 不是tw-这种格式的
      if (!m[0].endsWith('-')) classNameMap[m[0]] = 1;
    }
  });
  //
  for (let className in classNameMap) {
    let tmp = className.split(':');
    let is = tmp[0];
    if (!to[is]) to[is] = {};
    let clsName = tmp[tmp.length - 1];
    if (!to[is][clsName]) to[is][clsName] = {};
    //
    if (tmp.length > 2) {
      let isConfig = to[is][clsName];
      for (let i = 1; i <= tmp.length - 2; i++) {
        let variant = '';
        let responsive = false;
        if (definedVariantNames.indexOf(tmp[i]) >= 0) variant = tmp[i];
        else responsive = true;
        if (variant) {
          if (!isConfig['variants']) isConfig['variants'] = [];
          if (isConfig['variants'].indexOf(variant) < 0) {
            isConfig['variants'].push(variant);
          }
        }
        if (responsive) isConfig.responsive = true;
      }
    }
  }
  return to;
};

module.exports = function(opt) {
  return function(obj) {
    // 生成配置
    let content = defaultContent.slice();
    if (opt.content) content = content.concat(opt.content);
    let iss = opt.iss || {};
    if (opt.autoCollect !== false) content.forEach((c) => collectClasses(iss, c));
    //
    if (!(obj.addUtilities && obj.e && obj.prefix && obj.config)) {
      if (obj.theme) obj['iss'] = iss;
      return;
    }

    //
    // 正常输出
    let { addUtilities, e, prefix, config } = obj;
    let screens = config('theme.screens');
    let sep = config('separator');
    for (let is in iss) {
      for (let clsName in iss[is]) {
        let isConfig = iss[is][clsName] || {};
        if (!isConfig.variants) isConfig.variants = [];
        let important = isConfig.important !== undefined ? isConfig.important : false; //eslint-disable-line
        let responsive = isConfig.responsive !== undefined ? isConfig.responsive : false; //eslint-disable-line
        //
        ['', ...isConfig.variants].forEach((vn) => {
          let bps = responsive && screens ? screens : undefined;
          let utilities = {};
          // 1.
          // .is-active.is-active:tw-text-primary
          // .is-active.is-active:hover:tw-text-primary:hover
          utilities[`.${is}` + `.${e(`${is}${sep}` + `${!vn ? `` : `${vn}${sep}`}` + `${prefix(clsName)}`)}` + `${!vn ? `` : `${sep}${vn}`}`] = {
            [`@apply ${prefix(clsName)} ${important ? '!important' : ''}`]: ``,
          };

          // 2.responsive
          // .is-active.is-active:sm:tw-text-primary
          // .is-active.is-active:sm:hover:tw-text-primary:hover
          for (let bp in bps) {
            utilities[`@screen ${bp}`] = {
              [`.${is}` + `.${e(`${is}${sep}` + `${bp}${sep}` + `${!vn ? `` : `${vn}${sep}`}` + `${prefix(clsName)}`)}` + `${!vn ? `` : `${sep}${vn}`}`]: {
                [`@apply ${prefix(clsName)} ${important ? '!important' : ''}`]: ``,
              },
            };
          }
          // console.log(utilities);
          //
          addUtilities(utilities, {
            respectPrefix: false,
            respectImportant: false,
          });
        });
      }
    }
  };
};

// 1.
// .is-active.is-active:tw-text-primary
// .is-active.hover:is-active:tw-text-primary:hover
// 2.
// .is-active.sm:is-active:tw-text-primary
// .is-active.sm:hover:is-active:tw-text-primary:hover
// function getClassName(is, bp, variant, clsName, e, prefix, config) {
//   let sep = config("separator");
//   let clsPrefix = `${is}`;
//   let clsBp = `${!bp ? `` : `${bp}${sep}`}`;
//   let clsVariant = `${!variant ? `` : `${variant}${sep}`}`;
//   let cls = `${is}${sep}${prefix(clsName)}`;
//   let clsSuffix = `${!variant ? `` : `${sep}${variant}`}`;
//   return `.${clsPrefix}.${e(`${clsBp}${clsVariant}${cls}${clsSuffix}`)}`;
// }

// module.exports = function() {
//   return function({ addVariant, e, config }) {
//     let allVariantNames = {};
//     _.map(config("variants"), variants => {
//       variants.forEach(vname => {
//         if (vname.startsWith("is-") && definedVariantNames.indexOf(vname) < 0)
//           allVariantNames[vname] = vname;
//       });
//     });
//     //console.log(allVariantNames);

//     _.map(allVariantNames, vname => {
//       let name = "";
//       let variant = "";
//       if (vname.indexOf(":") < 0) {
//         name = vname;
//       } else {
//         name = vname.split(":")[0];
//         variant = vname.split(":")[1];
//       }
//       addVariant(name, ({ modifySelectors, separator }) => {
//         modifySelectors(({ className }) => {
//           return variant === ""
//             ? `.${e(`${name}.${name}${separator}${className}`)}`
//             : `.${e(`${name}.${name}${separator}${className}:${variant}`)}`;
//         });
//       });
//     });

//     // addVariant("disabled", ({ modifySelectors, separator, container }) => {
//     //   modifySelectors(({ className }) => {
//     //     return `.disabled${separator}${className}:disabled`;
//     //   });
//     // });

//     // addVariant("important", ({ container }) => {
//     //   container.walkRules(rule => {
//     //     console.log(rule.selector);
//     //     rule.selector = `.\\!${rule.selector.slice(1)}`;
//     //     console.log(rule.selector,"----");
//     //     rule.walkDecls(decl => {
//     //       decl.important = true;
//     //     });
//     //   });
//     // });

//     // addVariant("supports-grid", ({ container, separator }) => {
//     //   const supportsRule = postcss.atRule({
//     //     name: "supports",
//     //     params: "(display: grid)"
//     //   });
//     //   supportsRule.nodes = container.nodes;
//     //   container.nodes = [supportsRule];
//     //   supportsRule.walkRules(rule => {
//     //     rule.selector = `.supports-grid${separator}${rule.selector.slice(1)}`;
//     //   });
//     // });
//   };
// };
