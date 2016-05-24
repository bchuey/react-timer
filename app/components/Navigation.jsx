var React = require('react');
var {Link, IndexLink} = require('react-router');

// Component names match file names
// Presentational component so use `stateless` function syntax
var Navigation = () => {

	return (
		<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">
							React Timer App
						</li>
						<li>
							<IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
						</li>
						<li>
							<Link to="/countdown" activeClassName="active-link">Countdown</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li className="menu-text">
							{/*target => how you want to open the link */}
							Created by <a href="" target="">Chris</a>
						</li>
					</ul>
				</div>
		</div>
	);
};

module.exports = Navigation;
