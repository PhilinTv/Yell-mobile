var builder = require(process.cwd() + '/builder');

module.exports = function (include, exclude) {    
    return builder.getDeps(include, exclude);
};
