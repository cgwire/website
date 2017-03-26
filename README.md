# CGWire Website Sources

## Development

*setup*

Clone this repository then install dependencies:

```bash
npm i
```

*build*

To run the build properly you will need at least Node.js v4.0. 

```bash
npm run build
```

The result will be stored in a folder named `build`.

*How to start the development server*

```bash
npm run dev
```

This command will run:

* a web server that serves your static built files on the 3000 port.
* a watcher that will rebuild your files and update your locale keys eacht time you change something.


## Locales

We use JSON key-value files to store all the locales. These files are located
inside the `src/locales` folder. 

## Extra information

* The build engine of the website is based on [Metalsmith](http://metalsmith.io/) (a static website generator). 
* The templates are written with [Handlebars](http://handlebarsjs.com/). 
* Stylesheets are written with [Stylus](http://stylus-lang.com/)

## Credits

Icons come from [iconfinder.com](https://www.iconfinder.com)
