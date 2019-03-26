const {
    src,
    dest,
    series
} = require('gulp')
const del = require('del')
const uglify = require('gulp-uglify')
const replace = require('gulp-replace')
const fs = require('fs')
const PROJECT = JSON.parse(fs.readFileSync('./package.json'))
const DATE = new Date()

function clean(cb) {
    del(['dist/*', 'index.html'])
    cb()
}

function build_dist(cb) {
    src('src/text-image.js')
        .pipe(uglify())
        .pipe(dest('dist/'))
    cb()
}

function make_gh_pages(cb) {
    src('demo/index.html')
        .pipe(replace('%_VERSION_%', PROJECT.version))
        .pipe(replace('%_DATE_%', DATE.toUTCString()))
        .pipe(replace('../', ''))
        .pipe(dest('.'))
    cb()
}

exports.build = series(clean, build_dist)

exports.ghpages = series(clean, build_dist, make_gh_pages)
