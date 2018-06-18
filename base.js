const metalsmith = require('metalsmith');
const filenames = require("metalsmith-filenames");
const date = require('metalsmith-build-date');
const layouts = require('metalsmith-layouts');
const discoverPartials = require('metalsmith-discover-partials')
const i18n = require('metalsmith-i18n');
const mapsite = require('metalsmith-mapsite');
const permalinks = require('metalsmith-permalinks');
const ignore = require('metalsmith-ignore');
const rename = require('metalsmith-rename');
const fingerprint = require('metalsmith-fingerprint');
const inPlace = require('metalsmith-in-place');
const uglify = require('metalsmith-uglify');
const stylus = require('metalsmith-stylus');
const autoprefixer = require('metalsmith-autoprefixer');
const assets = require('metalsmith-assets');

var handlebars = require('handlebars');
handlebars.registerHelper('if_eq',  function (a, b, opts) {
  if (a === b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});


module.exports = {
  getMetalsmith: function (locale) {
    let destination = 'dist/';
    destination += locale;

    const metalsmithInstance = metalsmith(__dirname)

      // Config
      .use(filenames)
      .use(ignore([
        "locales/*",
        "partials/*",
        "styles/mixins/*",
        "styles/_*",
      ]))
      .use(date)

       //Javascript
      .use(uglify({
        filter: (name) => name.match(/js2\/.+\.js$/),
        removeOriginal: true,
        sourceMap: true,
        concat: 'js/main.min.js'
      }))

      // Styles
      .use(stylus())
      .use(autoprefixer({
        browsers : ['last 2 versions'],
        cascade  : false
      }))
      .use(fingerprint({
        pattern: 'styles/main.css'
      }))

      // Translation
      .use(i18n({
        default: locale === '' ? 'en' : locale,
        locales: ['en', 'fr'],
        directory: 'src/locales'
      }))
      .use(function locales(files, metalsmith, done) {
          for (let file in files) {
            files[file].locale = locale === '' ? 'en' : locale;
            done();
          };
        }
      )

      // HTML
      .use(layouts({
        directory: 'src',
        pattern: '*.hbs',
        default: 'layouts/base.hbs'
      }))

      .use(discoverPartials({
        directory: 'src/partials',
        pattern: /\.html/
      }))

      .use(inPlace({
        directory: 'src',
        pattern: '*.hbs'
      }))

      // Misc
      .use(mapsite({
        omitExtension: true,
        hostname: "https://www.cgwire.com/" + locale
      }))
      .use(permalinks({
        pattern: ':title',
        relative: false
      }))

      .destination(destination);

    return metalsmithInstance;
  }
}
