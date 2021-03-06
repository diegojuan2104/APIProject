import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //no refresh

export default class Navigation extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<Link className="navbar-brand" to="/">
						MyLinks
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse " id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active view overlay zoom m-2">
								<Link className="navbar-brand" to="/">
									Links
								</Link>
							</li>
							<li className="nav-item active view overlay zoom m-2">
								<Link className="navbar-brand" to="/create">
									Create Link
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
