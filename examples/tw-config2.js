const path = require('path');
//import utils class
const utils = require('./../lib');
const config = utils.pre('light', false, `./examples/tw-config.js`);
module.exports = config;

utils.delete(utils.keys.screens);
