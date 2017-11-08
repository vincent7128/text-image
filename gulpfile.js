var gulp = require('gulp'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    gulpsync = require('gulp-sync')(gulp),
    replace = require('gulp-replace'),
    fs = require('fs'),
    PROJECT,
    DATE;

gulp.task('clean', function() {
    return gulp.src(['dist', 'index.html'], {
            read: false
        })
        .pipe(clean({
            force: true
        }));
});

gulp.task('build-dist', function() {
    return gulp.src('src/text-image.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('make-gh-pages', function() {
    return gulp.src('demo/index.html')
    .pipe(replace('%_VERSION_%', PROJECT.version))
    .pipe(replace('%_DATE_%', DATE.toUTCString()))
    .pipe(gulp.dest('.'));
});

gulp.task('init', function () {
    PROJECT = JSON.parse(fs.readFileSync('./package.json'));
    DATE = new Date();
})

gulp.task('build', gulpsync.sync([
    'init',
    'clean',
    'build-dist'
]));

gulp.task('gh-pages', gulpsync.sync([
    'build',
    'make-gh-pages'
]));