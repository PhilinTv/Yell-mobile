var fs = require('fs'),
    stylus = require('stylus'),
    nib = require('nib'),
    Builder;


Builder = function () {
    var _this = this;
    
    this.options = {};
    this.configClient = require('./configs/config.client');
    this.clientFolder = '/client';
    this.clientPath = process.cwd() + this.clientFolder;
    this.folders = [
        '/vendors',
        '/layouts',
        '/pages',
        '/blocks'
    ]
    
    this.render = {
        styl: function (filePath) {
            var dirPath = filePath.slice(0, filePath.lastIndexOf('/')),
                str = fs.readFileSync(_this.clientPath + filePath, 'utf8');
            
            return stylus(str)
                .use(nib())
                .import('nib')
                .include(_this.clientPath + '/_addons/stylus/')
                .import('variables')
                .import('mixins')
                .define('$dir-path', _this.options.env == 'production' ? '' : dirPath)
                .render();
        },
        js: function (filePath) {
            return fs.readFileSync(_this.clientPath + filePath, 'utf8');
        }
    };
}


Builder.prototype.setOptions = function (options) {
    this.options = options;
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


Builder.prototype.getDeps = function (include, exclude) {
    var _this = this,
        include = (include instanceof Array) ? include : [include],
        includeCollection = this.collect(include),
        excludeCollection = {},
        files = {
            styles: {},
            scripts: {},
            views: {},
            img: {}
        },
        reUrl = /^((https?:)?\/\/)/;
    
    if (exclude) {
        exclude = (exclude instanceof Array) ? exclude : [exclude];
        excludeCollection = this.collect(exclude);
    }
    
    for (var name in includeCollection) {
        if (excludeCollection[name]) continue;
        
        includeCollection[name].styles && includeCollection[name].styles.forEach(function (fileName) {
            if (reUrl.test(fileName)) {
                files.styles[name] = files.styles[name] || [];
                files.styles[name].push(fileName);
            }
            else {
                _this.isClientFileExists(name + '/' + fileName, function (filePath) {
                    files.styles[name] = files.styles[name] || [];
                    files.styles[name].push(filePath);
                });
            }
        });
        
        includeCollection[name].scripts && includeCollection[name].scripts.forEach(function (fileName) {
            if (reUrl.test(fileName)) {
                files.scripts[name] = files.scripts[name] || [];
                files.scripts[name].push(fileName);
            }
            else {
                _this.isClientFileExists(name + '/' + fileName, function (filePath) {
                    files.scripts[name] = files.scripts[name] || [];
                    files.scripts[name].push(filePath);
                });
            }
        });
        
        includeCollection[name].view && [includeCollection[name].view].forEach(function (fileName) {
            _this.isClientFileExists(name + '/' + fileName, function (filePath) {
                files.views[name] = filePath.replace(/^\//, '');
            });
        });
        
        _this.isClientFileExists(name + '/img/', function (folderPath) {
            var fullPath = _this.clientPath + folderPath;
            
            fs.readdirSync(fullPath).forEach(function(file) {
                files.img[name] = files.img[name] || [];
                files.img[name].push(fullPath + file);
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
    
    this.folders.forEach(function (path) {
        if (fs.existsSync(_this.clientPath + path + '/' + filePath)) {
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
