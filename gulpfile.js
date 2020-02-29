var gulp = require('gulp');
// const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

// const plagini = require('./postcss.config.js');
// const postcssCustomProperties = require('postcss-custom-properties');

const templateMainPath = 'assets/templates/main/';
const distMainPath = 'assets/templates/main/dist/';

// const src = {
//   css: 'assets/templates/main/dist/main.min.css',
// };

const css = () => {
  return gulp.src(templateMainPath + 'css/main.css')
    .pipe(postcss())
    .pipe(rename('main.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest(distMainPath));
};

const watch = () => {
  gulp.watch(templateMainPath + 'css/**/*.css', css);
}

gulp.task('default', watch);
