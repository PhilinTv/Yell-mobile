var builder = require(process.cwd() + '/builder');

module.exports = function (arg) {    
    return builder.getDeps(arg);
};
