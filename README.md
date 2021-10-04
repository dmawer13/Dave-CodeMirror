# Dave - CodeMirror

This repo develops a CodeMirror plugin to support transdisciplinary commenting... or something.

## Installation

Clone this repo. Then install dependencies with 

    $ npm install

Also install [rollup](https://rollupjs.org/guide/en/) globally with:

    $ npm install --global rollup

## Development

The source code lives in `src`. It needs to be built into `dist/bundle.js`, which is the 
script loaded by `index.html`. To build the source code, run 

    $ npm run build

You can also run a local development server. The following command will run a local development server,
automatically rebuilding whenever code changes. You'll see changes live in the browser.
