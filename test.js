const resolveConfig = require('tailwindcss/resolveConfig');

const config = require('./lib/tw-config-1.2.0');

console.log(resolveConfig([config]));
