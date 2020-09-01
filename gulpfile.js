'use strict'

var gulp = require('gulp')
var electron = require('electron-connect').server.create()

// gulp.task('default', ['serve'])

// gulp.task('serve', () => {
//   console.log('watching')

//   // Start browser process
//   electron.start()

//   // Reload renderer process
//   gulp.watch(['index.js', 'player.js', 'index.html', 'assets/css/*.css', 'modules/*.js'], electron.restart)

//   // Reload renderer process
//   // gulp.watch(['player.js', 'templates/index.tmpl'], electron.restart)
// })

gulp.task('serve', () => {
  electron.start()
  gulp.watch(['index.js', 'player.js', 'index.html', 'assets/css/*.css', 'modules/*.js']).on('change', function(event) {
      console.log(event.path);
      console.log(event.type);
      electron.restart
      // code to execute
  });
});
