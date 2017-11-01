var gulp = require('gulp'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    gulpsync = require('gulp-sync')(gulp),
    replace = require('gulp-replace'),
    fs = require('fs'),
    PROJECT;

gulp.task('delete-dist', function() {
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
        .pipe(rename({suffix: '-' + PROJECT.version + '.min'}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('create-github-page', function() {
    return gulp.src('demo/index.html')
        .pipe(replace('%_VERSION_%', PROJECT.version))
        .pipe(gulp.dest('.'));
});

gulp.task('init', function () {
    PROJECT = JSON.parse(fs.readFileSync('./package.json'));
})

gulp.task('build', gulpsync.sync([
    'init',
    'delete-dist',
    'build-dist'
]));

gulp.task('github-page', gulpsync.sync([
    'build',
    'create-github-page'
]));