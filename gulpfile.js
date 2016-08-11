var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
  	.pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/'));
});


gulp.task('watch', function() {
	gulp.watch('sass/*.scss',['sass'])
});