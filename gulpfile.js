var gulp = require('gulp')
,	bower = require('gulp-bower')
,	sass = require('gulp-ruby-sass')
,	minifycss = require('gulp-minify-css')
,	rename = require('gulp-rename')
,	connect = require('gulp-connect');

gulp.task('bower', function() {
	bower();
});

gulp.task('init', function() {
	gulp.src('bower/bourbon/app/assets/stylesheets/**')
	.pipe(gulp.dest('scss/bourbon'))
	.pipe(gulp.src('bower/neat/app/assets/stylesheets/**'))
	.pipe(gulp.dest('scss/neat'))
});

gulp.task('styles', function() {
	gulp.src('scss/styles.scss')
	.pipe(sass({ style: 'expanded' }))
	.pipe(gulp.dest('css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	gulp.watch(['scss/styles.scss'], ['styles']);
});

gulp.task('default', ['init', 'styles', 'watch']);
