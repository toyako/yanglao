var gulp = require("gulp");
var mincss = require("gulp-clean-css");
var concat = require("gulp-concat");

gulp.task("mincss", function() {
	gulp.src("./css/*.css")
		.pipe(concat("web.min.css"))
		.pipe(mincss())
		.pipe(gulp.dest("./dist/css"))
});
var uglify = require("gulp-uglify");
gulp.task("minjs", function() {
	gulp.src("./js/*.js")
		.pipe(concat("web.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
})

var tinypng = require("gulp-tinypng");
gulp.task("minimg", function() {
	gulp.src("./img/*.{png,jpg,jpeg}")
		.pipe(tinypng('NrdB1WWcD70sdBXwtlQ6-4f_76htsOy5'))
		.pipe(gulp.dest("./dist/img"))
});

var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("./*.html").on('change', browserSync.reload);
	gulp.watch("./css/*.css").on('change', browserSync.reload);
	gulp.watch("./scss/*.scss").on('change', browserSync.reload);
	//	gulp.watch("./js/**/*.js").on('change',browserSync.reload);
	gulp.watch("./dist/**/*.*").on('change', browserSync.reload);
});
gulp.task("wp", ["mincss", "minjs", "browser-sync"], function() {
	gulp.watch('./css/*.css', function() {
		gulp.run('mincss');
	});
	gulp.watch('./js/*.js', function() {
		gulp.run('minjs');
	});
	gulp.watch('./sass/*.sass', function() {
		gulp.run('sass');
	});
	//	gulp.watch("./img/*.{png,jpg,jpeg}",function(){
	//		gulp.run('minimg');
	//	})
});