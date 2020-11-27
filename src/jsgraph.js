/* eslint-disable */
const initialSelf = global.self;
global.self = global;
module.exports = require('node-jsgraph');
global.self = initialSelf;
