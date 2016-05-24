// must import React explicitly
var React = require('react');
var ReactDOM = require('react-dom');

// load react-router module
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');
var Clock = require('Clock');

// Load foundation
// chaining the loaders
// require('style!css!foundation-sites/dist/foundation.min.css');


$(document).foundation();

// App SCSS
require('style!css!sass!applicationStyles');


ReactDOM.render(

	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="countdown" component={Countdown}/>
			<IndexRoute component={Timer}/>
		</Route>

	</Router>,
	document.getElementById('app') // links to /public/index.html
);
