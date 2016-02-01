// include gulp
var gulp = require('gulp');

// include error handling plugins
var plumber = require('gulp-plumber');

// include css plugins
var sass 					= require('gulp-sass');
var cssnano 			= require('gulp-cssnano');
var sourcemap 		= require('gulp-sourcemaps');
var postcss 			= require('gulp-postcss');
var autoprefixer 	= require('autoprefixer');

// paths for watching
var folders = {
	source: {
		scss: ['./Resources/Private/Scss/*.scss']
	},
	target: {
		css: './Resources/Public/Css/'
	}
};

// CSS concat and minify
gulp.task('scss', function() {
	gulp.src(folders.source.scss)
		.pipe(plumber())
		.pipe(sourcemap.init())
		.pipe(sass())
		.pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
		.pipe(cssnano())
		.pipe(sourcemap.write('.'))
		.pipe(gulp.dest(folders.target.css));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch(folders.source.scss, ['scss']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scss']);