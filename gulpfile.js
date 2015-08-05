var gulp = require('gulp'),
	react = require('gulp-react'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	copy = require('gulp-copy');

var opt = { es6module: true };

var jsSource = {
	comp: [
		'app/components/layout.jsx',
		'app/components/buttons/**/*.jsx',
		'app/components/page/root.jsx'
	],
	vendor: [
		'bower_components/react/react.js',
		'bower_components/jquery/dist/jquery.js',
		'bower_components/jquery-mousewheel/jquery.mousewheel.js',
		'bower_components/flipsnap/flipsnap.js'
	]
};

gulp.task('js-vendor', function() {
	return gulp.src(jsSource.vendor)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('public/assets/scripts'));
});

gulp.task('js-comp', function() {
	return gulp.src(jsSource.comp)
		.pipe(concat('components.jsx'))
		.pipe(react(opt))
		.pipe(babel())
		.pipe(gulp.dest('public/assets/scripts'));
});

gulp.task('css', function() {
	return gulp.src('app/assets/styles/site.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/assets/styles'));
}); 

gulp.task('watch', function() {
	gulp.watch('app/components/**/*.jsx', [ 'js-comp' ]);
	gulp.watch('app/assets/styles/**/*.scss', [ 'css' ]);
});