const gulp = require('gulp')
const less = require('gulp-less')
const path = require('path')
const nunjucksRender = require('gulp-nunjucks-render')

gulp.task('nunjucks', () => {

  const src  = 'src/pages/**/*.+(html|nunjucks)'
  const path = ['src/templates']
  const dist = 'dist'

  return gulp.src(src)
    .pipe(nunjucksRender({ path }))
    .pipe(gulp.dest(dist))
})

gulp.task('less', function() {
  const src  = 'src/styles/index.less'
  const path = ['src/styles']
  const dist = 'dist/styles'

  return gulp.src(src)
    .pipe(less({ path }))
    .pipe(gulp.dest(dist))
})

gulp.task('watch', function() {
  gulp.watch('./**/*.nunjucks', ['nunjucks'])
  gulp.watch('./**/*.less', ['less'])
})
