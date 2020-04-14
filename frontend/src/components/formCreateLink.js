import React, { Component } from 'react';
import axios from 'axios';

export default class formCreateLink extends Component {
	state = {
		link: '',
		name: '',
		description: '',
		edit: '',
		_id: '',
	};

	async componentDidMount() {
		if (this.props.match.params.id) {
			const res = await axios.get('http://localhost:4000/api/links/' + this.props.match.params.id);
			this.setState({
				link: res.data.link,
				name: res.data.name,
				description: res.data.description,
				edit: true,
				_id: this.props.match.params.id,
			});
			console.log(res);
		}
	}

	onSubmit = async (e) => {
		console.log(this.state.link);
		e.preventDefault();

		if (this.state.edit) {
			await axios.put('http://localhost:4000/api/links/' + this.state._id, {
				name: this.state.name,
				link: this.state.link,
				description: this.state.description,
			});
		} else {
			await axios.post('http://localhost:4000/api/links', {
				name: this.state.name,
				link: this.state.link,
				description: this.state.description,
			});
		}

		this.setState({ link: '', name: '', description: '' });

		window.location.href = '/';
	};

	onInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<div className="col-md-6 offset-md-3">
				<div className="card card-body">
					{!this.state.edit ? <h4>Create Link</h4> : <h4>Update link Id:{this.state._id}</h4>}
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<input
								value={this.state.name}
								type="text"
								className="form-control"
								placeholder="Name"
								name="name"
								required
								onChange={this.onInputChange}
							/>
						</div>
						<div className="form-group">
							<input
								value={this.state.link}
								type="text"
								className="form-control"
								placeholder="Link"
								name="link"
								onChange={this.onInputChange}
								required
							/>
						</div>
						<div className="form-group">
							<textarea
								value={this.state.description}
								className="form-control"
								placeholder="Description"
								name="description"
								onChange={this.onInputChange}
							/>
						</div>
						{!this.state.edit ? (
							<button type="submit" className="btn btn-primary">
								save
							</button>
						) : (
							<button type="submit" className="btn btn-primary">
								update
							</button>
						)}
					</form>
				</div>
			</div>
		);
	}
}
