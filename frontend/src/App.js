import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

import Navigation from './components/Navigation';
import formCreateLink from './components/formCreateLink';
import formCreateUser from './components/formCreateUser';
import LinkList from './components/LinkList';
function App() {
	return (
		<Router>
			<Navigation />
			<div className="container">
				<Route exact path="/" component={LinkList} />
				<Route path="/edit/:id" component={formCreateLink} />
				<Route path="/create" component={formCreateLink} />
				<Route path="/user" component={formCreateUser} />
			</div>
		</Router>
	);
}

export default App;
