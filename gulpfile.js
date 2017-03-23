const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function(){
  return gulp.src('assets/sass/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass()) 
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('assets'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
});

gulp.task('images', function(){
    return gulp.src('images/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('assets/images'))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('assets/sass/**/*.scss', ['sass']); 
  gulp.watch('./index.html', browserSync.reload); 
  gulp.watch('assets/*.js', browserSync.reload); 
  // Other watchers
});

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});