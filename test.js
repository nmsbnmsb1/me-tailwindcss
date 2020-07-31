const resolveConfig = require('tailwindcss/resolveConfig');

const config = require('tailwindcss/resolveConfig')(require('lodash/cloneDeep')(require('tailwindcss/stubs/defaultConfig.stub.js')));

console.log(config);
