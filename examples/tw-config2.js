const path = require('path');
//import utils class
const utils = require('./../lib');
const config = utils.pre(path.join(__dirname, '/tw-config.js'));
module.exports = config;

utils.delete(utils.keys.screens);
