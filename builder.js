var fs = require('fs'),
    stylus = require('stylus'),
    nib = require('nib'),
    Builder;


Builder = function () {
    var _this = this;
    
    this.configClient = require('./configs/config.client');
    this.clientPath = 'client';
    this.clientPathFull = process.cwd() + '/' + this.clientPath;
    this.paths = [
        'vendors',
        'layouts',
        'pages',
        'blocks'
    ]
    
    this.render = {
        styl: function (filePath) {
            var str = fs.readFileSync(_this.clientPathFull + filePath, 'utf8');
            
            return stylus(str)
                .use(nib())
                .import('nib')
                .include(_this.clientPathFull + '/_addons/stylus/')
                .import('variables')
                .import('mixins')
                .render();
        },
        js: function (filePath) {
            return fs.readFileSync(_this.clientPathFull + filePath, 'utf8');
        }
    };
}


Builder.prototype.collect = function (arr, collection) {
    var _this = this,
        collection = collection || {};
    
    arr.forEach(function (name) {
        if (_this.configClient[name] && !collection[name]) {
            var item = _this.configClient[name];
            collection[name] = item;

            if (item.deps) {
                collection = _this.collect(item.deps, collection);
            }
        }
    });
    
    return collection;
};


Builder.prototype.getDeps = function (arg) {
    var _this = this,
        arg = (arg instanceof Array) ? arg : [arg],
        collection = this.collect(arg),
        files = {
            styles: {},
            scripts: {},
            views: {}
        };
    
    for (var name in collection) {
        collection[name].styles && collection[name].styles.forEach(function (fileName) {
            _this.isClientFileExists(name + '/' + fileName, function (filePath) {
                files.styles[name] = files.styles[name] || [];
                files.styles[name].push(filePath);
            });
        });
        collection[name].scripts && collection[name].scripts.forEach(function (fileName) {
            _this.isClientFileExists(name + '/' + fileName, function (filePath) {
                files.scripts[name] = files.scripts[name] || [];
                files.scripts[name].push(filePath);
            });
        });
        collection[name].view && [collection[name].view].forEach(function (fileName) {
            _this.isClientFileExists(name + '/' + fileName, function (filePath) {
                files.views[name] = filePath;
            });
        });
    }
    
    return files;
};


Builder.prototype.renderFile = function (filePath, cb) {
    var ext = filePath.match(/\w+$/)[0],
        res;
    
    if (typeof this.render[ext] == 'function') {
        res = this.render[ext](filePath);
    }
    
    return typeof cb == 'function' ? cb(res) : res;
};


Builder.prototype.isClientFileExists = function (filePath, cb) {
    var _this = this,
        exists = false;
    
    this.paths.forEach(function (path) {
        if (fs.existsSync(_this.clientPathFull + '/' + path + '/' + filePath)) {
            if (typeof cb == 'function') {
                cb(path + '/' + filePath);
            }
            
            exists = true;
            return false;
        }
    });
    
    return exists;
};


module.exports = new Builder();
