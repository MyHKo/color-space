const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano')
const terser = require('gulp-terser')
const gulp = require("gulp");
const browserSync = require('browser-sync').create();

function scssTask(){
    return src('app/scss/style.css', {sourcemaps: true}).pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('dist', {sourcemaps: "."}))
}

function jsTask(){
    return src('app/js/style.js', {sourcemaps: true})
        .pipe(terser())
        .pipe(dest('dist', {sourcemaps: "."}))
}

function browserSyncServe(cb){
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browserSyncReload(cb){
    browserSync.reload()
    cb()
}

function watchTask(cb){
    watch('*.html', browserSyncReload);
    watch(['app/scss/**/*.scss', 'app/js/**/*.js '], browserSyncReload);
}

exports.default = series(
    scssTask,
    jsTask,
    browserSyncServe,
    watchTask
);