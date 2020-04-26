//https://github.com/skleeschulte/webpack-bundle-update-hook-plugin
//当仅仅更新vue文件的template和script部分时，如果当前开启了Purgecss插件，当前新增加的css类无法立即被添加入css，必须手动更新css文件或者
//config文件，这个插件在webpack的一次更新后，会自动触发一次postcss的编译流程，保证当前的css类添加生效
const fs = require('fs');

function HmrHook(opt) {
  this.pluginName = 'HmrHook';
  this.opt = opt || {};
  if (!this.opt.afterMS) this.opt.afterMS = 1000;
  if (this.opt.debug === undefined) this.opt.debug = false;
  if (!this.opt.trigger) this.opt.trigger = __dirname + '/styles/tw.config.js';
  this.timeoutID = -1;
}

HmrHook.prototype.apply = function(compiler) {
  let prevModules;

  //编译结束后，判断更新的文件
  compiler.hooks.done.tap(this.pluginName, (stats) => {
    let currModules = {};
    let newModules = {};
    let changedModules = {};
    let removedModules = {};

    stats.compilation.modules.forEach((module) => {
      // skip modules which don't have a resource property (e.g. main module 0)
      if (!module.resource) return;

      currModules[module.id] = {
        buildTimestamp: module.buildTimestamp,
        resource: module.resource,
      };

      // if prevModules exists, check if current module is new or has changed
      if (prevModules) {
        if (!prevModules[module.id]) {
          // current module is new
          newModules[module.id] = module.resource;
        } else if (prevModules[module.id].buildTimestamp !== module.buildTimestamp) {
          // current module has changed
          changedModules[module.id] = module.resource;
        }
      }
    });
    // if prevModules exists, check for removed modules
    if (prevModules) {
      Object.keys(prevModules).forEach(function(id) {
        if (!currModules[id]) {
          // module was removed
          removedModules[id] = prevModules[id].resource;
        }
      });
    }

    prevModules = currModules;

    let newModulesCount = Object.getOwnPropertyNames(newModules).length;
    let changedModulesCount = Object.getOwnPropertyNames(changedModules).length;
    let removedModulesCount = Object.getOwnPropertyNames(removedModules).length;
    if (this.opt.debug) this.debug(newModules, changedModules, removedModules, newModulesCount, changedModulesCount, removedModulesCount);
    if (newModulesCount === 0 && changedModulesCount === 0 && removedModulesCount === 0) return;

    //判断是否要重置postcss
    let needUpdate = 0;
    //
    if (newModulesCount > 0) {
      for (let id in newModules) {
        if (!this.needUpdate(newModules[id])) {
          needUpdate = -1;
          break;
        }
      }
    }
    if (needUpdate >= 0 && changedModulesCount > 0) {
      for (let id in changedModules) {
        if (!this.needUpdate(changedModules[id])) {
          needUpdate = -1;
          break;
        }
      }
    }
    if (needUpdate >= 0 && removedModulesCount > 0) {
      for (let id in removedModules) {
        if (!this.needUpdate(removedModules[id])) {
          needUpdate = -1;
          break;
        }
      }
    }
    //
    if (needUpdate >= 0) {
      this.timeoutID = setTimeout(() => {
        this.timeoutID = -1;
        let config = fs.readFileSync(this.opt.trigger);
        fs.writeFileSync(this.opt.trigger, config);
      }, this.opt.afterMS);
    }
  });
};

HmrHook.prototype.needUpdate = function(modulePath) {
  let fileType = this.parseModule(modulePath);
  return fileType !== 'css' && fileType !== 'other';
};

HmrHook.prototype.parseModule = function(modulePath) {
  let fileName = modulePath.substring(modulePath.lastIndexOf('/'));
  if (fileName.indexOf('.vue') > 0) return 'vue';
  if (fileName.indexOf('.css') > 0) return 'css';
  if (fileName.indexOf('.ts') > 0 || fileName.indexOf('.js') > 0) return 'script';
  if (fileName.indexOf('.html') > 0 || fileName.indexOf('.htm') > 0) return 'html';
  return 'other';
};

HmrHook.prototype.debug = function(newModules, changedModules, removedModules, newModulesCount, changedModulesCount, removedModulesCount) {
  Object.keys(newModules).forEach((id) => {
    console.log('[plugin-hmr-hook] detected changed module: ' + newModules[id]);
  });
  Object.keys(changedModules).forEach((id) => {
    console.log('[plugin-hmr-hook] detected changed module: ' + changedModules[id]);
  });
  Object.keys(removedModules).forEach((id) => {
    console.log('[plugin-hmr-hook] detected removed module: ' + removedModules[id]);
  });
  //
  if (newModulesCount === 0 && changedModulesCount === 0 && removedModulesCount === 0) {
    console.log('[plugin-hmr-hook] a new bundle was compiled but nothing changed' + ' (this will always apply to the first compilation)');
  } else {
    console.log(
      '[plugin-hmr-hook] a new bundle was compiled (' +
        newModulesCount +
        ' new, ' +
        changedModulesCount +
        ' changed, ' +
        removedModulesCount +
        ' removed modules) - emitting bundle-update'
    );
  }
};

const configureWebpack = function(config, opt) {
  if (!config.plugins) config.plugins = [];
  config.plugins.push(new HmrHook(opt));
};

module.exports = {
  configureWebpack,
};
