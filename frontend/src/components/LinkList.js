import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; //no refresh

export default class LinkList extends Component {
	state = {
		links: [],
	};

	componentDidMount = () => {
		this.getLinks();
	};

	deleteLink = async (id) => {
		const res = await axios.delete('http://localhost:4000/api/links/' + id);
		console.log(res);
		this.getLinks();
	};

	getLinks = async () => {
		const res = await axios.get('http://localhost:4000/api/links');
		this.setState({ links: res.data });
	};

	render() {
		return (
			<div className="row container">
				<h1 className="col-12 text-center">Links</h1>
				{this.state.links.map((link) => (
					<div className="col-md-6 p-2" key={link._id}>
						<div className="card">
							<div className="card-header d-flex justify-content-between">
								<h5 className="card-title">{link.name}</h5>
								<Link className="btn btn-outline-dark btn-sm " to={'/edit/' + link._id}>
									Edit
								</Link>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">Link: {link.link}</li>
								<li className="list-group-item">Description: {link.description}</li>
							</ul>
							<div className="card-footer">
								<button
									className="btn btn btn-outline-danger btn-sm "
									onClick={() => this.deleteLink(link._id)}
								>
									Delete
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}
