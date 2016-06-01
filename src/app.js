var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('sitecore-ui/RaisedButton').default; 

var getMuiTheme = require('sitecore-ui/styles/getMuiTheme').default;
var MuiThemeProvider = require('sitecore-ui/styles/MuiThemeProvider').default;

var App = function () {
  return React.createElement(MuiThemeProvider, { muiTheme: getMuiTheme() },
    React.createElement(Button, {label: "Fikundik"})
  );
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('app')
);