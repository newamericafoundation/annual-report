var gulp = require('gulp'),
	react = require('gulp-react'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	copy = require('gulp-copy');

var opt = { es6module: true };

var jsSource = {
	source: [
		'app/assets/scripts/app.js'
	],
	comp: [
		'app/components/layout.jsx',
		'app/components/general/**/*.jsx',
		'app/components/page/root.jsx'
	],
	vendor: [
		'bower_components/react/react.js',
		'bower_components/jquery/dist/jquery.js',
		'bower_components/jquery-mousewheel/jquery.mousewheel.js'
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
		.pipe(babel())
		.pipe(gulp.dest('public/assets/scripts'));
});

gulp.task('js-source', function() {
	return gulp.src(jsSource.source)
		.pipe(concat('source.js'))
		.pipe(babel())
		.pipe(gulp.dest('public/assets/scripts'));
});

gulp.task('js', [ 'js-vendor', 'js-comp', 'js-source' ]);

gulp.task('css', function() {
	return gulp.src('app/assets/styles/site.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/assets/styles'));
}); 

gulp.task('watch', function() {
	gulp.watch([ 'app/components/**/*.jsx', 'app/assets/scripts/**/*.js' ], [ 'js' ]);
	gulp.watch('app/assets/styles/**/*.scss', [ 'css' ]);
});