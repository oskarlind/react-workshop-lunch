/*$ = jQuery = require('jquery');
var App = console.log('hello from browserify');
module.exports = App;*/

$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage');
var Places = require('./components/places/placesPage');
ReactDOM.render(<Home/>, document.getElementById('app'));