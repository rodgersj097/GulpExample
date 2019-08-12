"use strict";
var gulp = require("gulp");
var cssScss = require("gulp-css-scss");
var minifyCSS = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var changed = require("gulp-changed");
var minifyHtml = require("gulp-minify-html")
var minifyCss = require('gulp-minify-css')
var concat = require('gulp-concat')
var { series, parallel } = gulp
///////////////////
//// - SCSS/CSS //
//////////

var SCSS_DEST = "./src/Assets/SCSS/*.scss";
var SCSS_SRC = "./src/Assets/CSS";
var CSS_DEST = './src/Assets/CSS'


//CSS to SCSS 
gulp.task('css-scss', () => {
  return gulp.src(CSS_DEST)
    .pipe(cssScss())
    .pipe(gulp.dest(SCSS_DEST))
})

//Minify HTML 
gulp.task('minify-html', function () {
  return gulp
    .src('public/*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('public'))
})


//CSS minify 
gulp.task('minify-css', function () {
  return gulp
    .src(SCSS_SRC)
    .pipe(minifyCss())
    .pipe(gulp.dest(CSS_DEST))
})

//concat js 
gulp.task('concat', function () {
  return gulp
    .src('./src/Assets/Javascripts/*.js')
    .pipe(concat('concat.js'))
    .pipe(gulp.dest('./src/Assets/Javascripts/'))
})




gulp.task("default", gulp.series("watch_scss", function () { }));
