var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
 
gulp.task('prefix', function () {
    return gulp.src('_site/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS({keepBreaks: true}))
        .pipe(gulp.dest('css-prefixed'));
});