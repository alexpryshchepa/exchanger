import gulp from 'gulp';
import path from 'path';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import yargs from 'yargs';
import {
  paths
} from '../../config';

var flag = yargs.argv;

export default gulp.task('html', () => {
  return gulp.src(path.join(paths.src, paths.html.src))
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: "Gulp error in " + err.plugin,
          message: err.toString()
        })(err);
        this.emit('end');
      }
    }))
    .pipe(gulp.dest(path.join(paths.dist, paths.html.dist)))
    .pipe(browserSync.reload({
      stream: true
    }));
});
