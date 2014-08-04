var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	less = require('gulp-less'),
	minifyCSS = require('gulp-minify-css'),
	path = require('path'),
	coffee = require('gulp-coffee'),
	livereload = require('gulp-livereload'),
	lr = require('tiny-lr'),
	server = lr();

var coffeeSources = [
		'components/coffee/*.coffee'
];

var lessSources = [
		'components/less/*.less'
];

/*Create a variable array holding all the source file paths*/
var jsSources = [
		'components/lib/jquery-1.11.0.js',
		'components/scripts/*.js'
		];

var cssSources = [
		'components/css/include/bootstrap.css',
		'components/css/*.css'
		];		

/*Task0 - Process a less file*/
gulp.task('less', function(){
	gulp.src(lessSources)
	.pipe(less())
	.on('error', gutil.log)
	.pipe(gulp.dest('components/css'))
});/*end of the process task*/


/*Task1 - Create a task for compiling coffee script files*/
gulp.task('coffee', function(){
	gulp.src(coffeeSources)
	.pipe(coffee({bare:true}))
	.on('error', gutil.log)
	.pipe(gulp.dest('components/scripts'))
});/*end of the coffee compiling task*/


/*Task2 - Create a compile task to compile, concat and minify all the js in the components folder*/
gulp.task('compile', function(){ /*Name of the task is 'compile' */
	gulp.src(jsSources)
	.pipe(uglify()) /*uglify can also take inputs - www.gulpjs.com*/
	.pipe(concat('script.js')) /*concat takes a parameter - what is the name of the concatinated file*/
	.pipe(gulp.dest('js')) /*Store the destination inside the js folder*/
});/*end of the task compile*/

/*Task2.5 - Create a process task to concat and minify all the css into the css folder*/
gulp.task('process', function(){
	gulp.src(cssSources)
	.pipe(minifyCSS({keepBreaks:true}))
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('css'))
});/*end of the process task function*/

//Task3 - Gulp task to watch for any changes
gulp.task('watch', function(){
	/*This below function is used for livereload*/
	// var server = livereload();
	gulp.watch(cssSources, ['process']);
	gulp.watch(lessSources, ['less']);
	gulp.watch(jsSources, ['compile']);
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(['js/scripts.js', 'css/styles.css', '*.html']);
});/*end of the task watch*/

//Task0 - Creating a default task - The default task is going to run automatically, you dont need to name it explicitly
gulp.task('default', ['less', 'process', 'coffee', 'compile', 'watch']);/*end of the task default*/
/*The default task will first run the compile task and then the watch task*/