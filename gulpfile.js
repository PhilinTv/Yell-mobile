var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat')
    fs = require('fs'),
    writefile = require('writefile'),
    mkdirp = require('mkdirp'),
    builder = require('./builder'),
    buildFolder = 'build/';


var buildStyles = function (name, files) {
    var filePath = buildFolder + 'css/' + name + '.css',
        contents = '';
    
    for (var i in files) {
        for (var j in files[i]) {
            contents += builder.renderFile(files[i][j]);
        }
    }
    
    writefile(filePath, contents, function (err) {
        gulp.src(filePath)
        //.pipe(csso())
        .pipe(gulp.dest(buildFolder + 'css'));
    });
};


var buildScripts = function (name, files) {
    var filePath = buildFolder + 'js/' + name + '.js',
        contents = '';
    
    for (var i in files) {
        for (var j in files[i]) {
            contents += builder.renderFile(files[i][j]);
        }
    }
    
    writefile(filePath, contents, function (err) {
        gulp.src(filePath)
        //.pipe(uglify())
        .pipe(gulp.dest(buildFolder + 'js'));
    });
}


var buildImg = function (files) {
    var folder = buildFolder + 'img',
        contents = '';
    
    for (var i in files) {
        for (var j in files[i]) {
            writefile(
                folder + files[i][j].slice(files[i][j].lastIndexOf('/')),
                fs.readFileSync(files[i][j]),
                function (err) {}
            );
        }
    }
}


gulp.task('build', function() {
    var layouts = ['common'],
        pages = ['index'];
    
    builder.setOptions({env: 'production'});
    
    layouts.forEach(function (name) {
        var deps = builder.getDeps(name);
        
        buildStyles(name, deps.styles);
        buildScripts(name, deps.scripts);
        buildImg(deps.img);
    });
    
    pages.forEach(function (name) {
        var deps = builder.getDeps(name, layouts);
        
        buildStyles(name, deps.styles);
        buildScripts(name, deps.scripts);
        buildImg(deps.img);
    });
});