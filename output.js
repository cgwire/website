const base = require('./base.js');
const browserSync = require('metalsmith-browser-sync');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));


if (argv.dev) {
  metalsmith = base.getMetalsmith('en');
  metalsmith.use(browserSync({
    server : "dist",
    files  : ["src/**/*.*"],
    open: false
  }));
  metalsmith.build(function(err) {
    if (err) throw err;
  });

} else {
  if (argv.fr) {
    metalsmith = base.getMetalsmith('fr');
    metalsmith.build(function(err) {
      if (err) throw err;
    });
  }

  metalsmith = base.getMetalsmith('en');
  metalsmith.build(function(err) {
    if (err) throw err;
  });
}
