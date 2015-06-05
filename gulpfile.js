var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concatify = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	minifyCSS = require('gulp-minify-css'),
	concatCSS = require('gulp-concat-css'),
	imagemin = require('gulp-imagemin'),
	minifyhtml = require('gulp-minify-html'),
	webserver = require('gulp-webserver'),
	jshint = require('gulp-jshint');
	//rename = require('gulp-rename');

var paths = {
	scripts: ['js/*.js', 'js/jquery-2.1.4.min.js','node_modules/oauth-signature/dist/oauth-signature.js'],
	styles: ['css/*.css'],
	images: ['images/**/*'],
	content: ['index.html']
};

/*gulp.task('scripts', function() {
	//gulp.src(['js/*.js','js/jquery-2.1.4.min.js', 'node_modules/oauth-signature/dist/oauth-signature.js'])
	gulp.src(paths.scripts)
			.pipe(uglify())
			.pipe(concatify('app.js'))
			.pipe(gulp.dest('./build/js'))
});*/
gulp.task('lint', function() {
	gulp.src(['js/ms.js', 'js/run.js'])
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
	gulp.src(['js/*.js', 'js/jquery-2.1.4.min.js', 'node_modules/oauth-signature/dist/oauth-signature.js'])
			.pipe(sourcemaps.init())
				.pipe(uglify())
				.pipe(concatify('app.js'))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('./build/js'));
});


gulp.task('styles', function() {
	gulp.src(paths.styles)
			.pipe(minifyCSS())
			.pipe(concatCSS('style.min.css'))
			.pipe(gulp.dest('./build/css'));
});

gulp.task('images', function() {
	gulp.src(paths.images)
			.pipe(imagemin({
				optimizationLevel: 5
			}))
			.pipe(gulp.dest('./build/images'));
});

gulp.task('content', function() {
	gulp.src(paths.content)
			.pipe(minifyhtml({
				empty: true,
				quotes: true
			}))
			.pipe(gulp.dest('./build'));
});


gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.content, ['content']);
	gulp.watch(paths.images, ['images']);
});

gulp.task('webserver', function() {
	gulp.src('build')
			.pipe(webserver({
				livereload: true,
				port: 8000
			}));
});

gulp.task('default', ['watch', 'webserver']);
//gulp.task('default', ['scripts', 'styles', 'images', 'content', 'watch']);
//gulp.task('default',['scripts']);