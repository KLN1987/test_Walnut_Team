const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefix = require('gulp-autoprefixer');
var uglify = require("gulp-uglify");
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');

function htmlBuild() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('build/'));
}

gulp.task('html', htmlBuild);

gulp.task('scripts', function () {
  return gulp.src('src/js/plugins/*.js')
    .pipe(uglify())
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(browserSync.stream());
});

gulp.task('clearBuild', function () {
  return del(['build/*'])
});

gulp.task('css', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(csso())
    .pipe(concat('style.css'))
    .pipe(autoprefix({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('build/css/'))
    .pipe(browserSync.stream());
});

gulp.task('img', function() {
  return gulp.src('src/img/**/*.*')
      .pipe(imagemin())
      .pipe(gulp.dest('build/img/'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*.*')
      .pipe(gulp.dest('build/fonts/'));
});

gulp.task('build',
  gulp.series(
      'clearBuild',
      gulp.parallel('html', 'scripts', 'css', 'fonts', 'img')
  )
);

 const config = {
  server: {
      baseDir: "./build"
  },
  tunnel: false,
  host: 'localhost',
  port: 3333
};

 gulp.task('watch', function() {
  browserSync.init(config);
  gulp.watch('src/scss/*.scss', gulp.series('css'));
  gulp.watch('src/js/plugins/*.js', gulp.series('scripts'));
  gulp.watch('src/*.html',  gulp.series('html')).on('change', browserSync.reload);
});

 gulp.task('default', gulp.series('build', 'watch'));
