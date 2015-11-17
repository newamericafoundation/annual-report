var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-minify-css');

gulp.task('css', function() {
	return gulp.src('app/assets/styles/site.scss')
		.pipe(sass())
		.pipe(minifyCss())
		.pipe(gulp.dest('public/assets/styles'));
}); 

gulp.task('watch', function() {
	gulp.watch([ 'app/components/**/*.jsx', 'app/assets/scripts/**/*.js' ], [ 'js' ]);
	gulp.watch('app/assets/styles/**/*.scss', [ 'css' ]);
});