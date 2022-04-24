var gulp = require('gulp');

//Plugins模块获取
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var minifyhtml = require('gulp-minify-html');

// 压缩 public 目录 css文件
gulp.task('minify-css', function () {
	return gulp
		.src('./public/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('./public'));
});

// 压缩 public 目录 html文件
gulp.task('minify-html', function () {
	return gulp
		.src('./public/**/*.html')
		.pipe(minifyhtml())
		.pipe(gulp.dest('./public'));
});

// 压缩 public/js 目录 js文件，忽略/public/lib/blog-encrypt.js
gulp.task('minify-js', function () {
	//纠错前：return gulp.src('./public/**/*.js')
	return gulp
		.src(['./public/**/*.js', '!./public/lib/blog-encrypt.js'])
		.pipe(uglify())
		.pipe(gulp.dest('./public'));
});

// 压缩图片
// gulp.task('minify-images', function () {
// 	return gulp
// 		.src('./public/medias/**/*.*')
// 		.pipe(
// 			imagemin(
// 				[
// 					imagemin.gifsicle({ optimizationLevel: 3 }),
// 					imagemin.jpegtran({ progressive: true }),
// 					imagemin.optipng({ optimizationLevel: 7 }),
// 					imagemin.svgo(),
// 				],
// 				{ verbose: true }
// 			)
// 		)
// 		.pipe(gulp.dest('./public/medias'));
// });

// 分别执行css、heml、js的压缩任务
gulp.task('default', gulp.parallel('minify-css', 'minify-html', 'minify-js'));
