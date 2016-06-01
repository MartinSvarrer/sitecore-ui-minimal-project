# Sitecore-UI minimal project boilerplate

This is a sample project show minimal configuration required to include a component from Sitecore-UI into a React page.

## Only include used modules

Webpack will only bundle imported modules, so do not include the entire sitecore-ui framework, instead only include needed components.

Do not:
```javascript
var Button = require('sitecore-ui').Button;
```

Do:
```javascript
var Button = require('sitecore-ui/Button').default;
```

## To include or exclude React from bundle, that is the question

It is a personal taste wether to include or exclude React (and ReactDOM) from your bundle.
This setup shows a bundle without React in the bundle. To include it simply remove the `externals` setting from `webpack.config.js` and remove the scripts in header of html file.
