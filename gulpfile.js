'use strict';

var browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    postcss = require('gulp-postcss'),
    size = require('gulp-size'),
    browserSync = require('browser-sync').create(),
    sourcePath = './develop/',
    buildPath = './build/';
// tasks

gulp.task('serve', ['styles'], function () {
    browserSync.init({
        server: {
            index: "index.html"
        }
    });
});

gulp.task('browserify', function () {
    return browserify(sourcePath + 'js/scripts.js')
        .bundle()
        .pipe(source('scripts.js'))
        .pipe(gulp.dest(buildPath + 'js'))
        .pipe(size({
            title: 'Uncompressed JavaScript:'
        }));

});

gulp.task('browserify:watch', function () {
    return gulp.watch(sourcePath + 'js/**/*.js', ['minify:js']);
});

gulp.task('minify:js', ['browserify'], function () {
    return gulp.src(buildPath + 'js/*.js')
        .pipe(uglify())
        .pipe(size({
            title: 'Compressed JavaScript:'
        }))
        .pipe(gulp.dest(buildPath + 'js'));
});

gulp.task('styles', function () {
    return gulp.src(sourcePath + 'sass/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(browserSync.stream())
        .pipe(size({
            title: 'Styles:'
        }))
        .pipe(gulp.dest(buildPath + 'css'));
});

gulp.task('automate', function () {
    gulp.watch(['*.html', sourcePath + 'sass/**/*.scss'], ['styles']);
	gulp.watch(['*.html', sourcePath + 'sass/**/*.sass'], ['styles']);
});

gulp.task('watch', function () {
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'browserify:watch', 'automate', 'serve']);
