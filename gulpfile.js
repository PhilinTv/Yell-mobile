var gulp = require('gulp'), // Сообственно Gulp JS
    stylus = require('gulp-stylus'), // Плагин для Stylus
    csso = require('gulp-csso'), // Минификация CSS
    imagemin = require('gulp-imagemin'), // Минификация изображений
    uglify = require('gulp-uglify'), // Минификация JS
    concat = require('gulp-concat'), // Склейка файлов
    nib = require('nib');


gulp.task('stylus', function() {
    gulp.src(['./client/**/*.styl', '!./client/_addons/**/*.styl'])
        .pipe(stylus({
            include: ['./client/_addons/stylus/'],
            import: ['variables', 'mixins', 'nib'],
            use: nib()
        })) // собираем stylus
    .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    .pipe(csso()) // минимизируем css
    .pipe(gulp.dest('./web/css/')); // записываем css
});