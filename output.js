const base = require('./base.js');
const browserSync = require('metalsmith-browser-sync');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));

if (argv.fr) {
  metalsmith = base.getMetalsmith('fr');
} else {
  metalsmith = base.getMetalsmith('en');
}

if (argv.dev) {
  metalsmith.use(browserSync({
    server : "dist",
    files  : ["src/**/*.*"],
    open: false
  }));
}

metalsmith.build(function(err) {
  if (err) throw err;
});
