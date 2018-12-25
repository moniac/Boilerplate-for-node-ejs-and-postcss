# Book of Node

![wizard using magic](https://media.giphy.com/media/3og0IP2tdIt6OEduUw/giphy.gif)

# Table of Contents
- [Summary](#summary)
- [How to start](#how-to-start)

## Summary

This is our boilerplate, setup in a way that fits our needs and hopefully that of others.

When we started developing, we ran into a lot of moments where we wished we could have a tooling setup that would make life easier.

This boilerplate does the following things;

* uses an ```.env``` file
* PostCSS support
* Implement Critical CSS
* .ejs support
* Hot reloading support for .ejs and .css files. (This was a big painpoint for us)
* Implements babel to compile new Javascript features (such as Async Await) to support IE 10+ browsers
* Bundles and generates sourcemaps for .js files while developing
* Implements ESLint for .js linting, stylelint for .css linting and EJSLint for useful .ejs error messages.
* Attempts to fix small linting issues on its own, such as indentation, based on your settings.
* Copies files such as fonts and images from the ```src``` folder to the ```public``` folder.
* Minifies all the .js and .css files on building
* Groups media query selectors on build
* Adds a command to easily add a component

## How to start

After cloning the repository, head to the folder and run:

```
yarn install
```

### Development

To start developing, run the command:

```
yarn run dev
```

This will start a development server at ```localhost:8000```

### Add new component

We have a command that will generate a folder with the files needed for a component:

```
yarn component name
```

Where **name** is the name you want to give the component. Use dashes(-) in stead of spaces.

### Build

To build your project, run the command:

```
yarn run build
```