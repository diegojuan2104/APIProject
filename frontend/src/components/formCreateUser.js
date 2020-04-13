import React, { Component } from 'react';
import axios from 'axios';

export default class formCreateUser extends Component {
	//object with app status
	state = {
		users: [],
		username: '',
	};

	//This is like a component constructor
	componentDidMount() {
		this.getUsers();
		console.log(this.state.users);
	}

	getUsers = async () => {
		const res = await axios.get('http://localhost:4000/api/users');
		this.setState({ users: res.data });
	};

	onChangeUserName = (e) => {
		this.setState({
			username: e.target.value,
		});
	};

	onSubmit = async (e) => {
		e.preventDefault();
		await axios.post('http://localhost:4000/api/users', {
			username: this.state.username,
		});
		this.setState({ username: '' });
		this.getUsers();
	};

	deleteUser = async (id) => {
		await axios.delete('http://localhost:4000/api/users/' + id);
		console.log(id);
		this.getUsers();
	};

	render() {
		return (
			<div className="row">
				<div className="col-md-4">
					<div className="card card-body">
						<h3>Create new User</h3>
						<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<input
									onChange={this.onChangeUserName}
									type="text"
									name=""
									id=""
									value={this.state.username}
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Save
							</button>
						</form>
					</div>
				</div>
				<div className="col-md-8">
					<ul clas="list-group">
						{this.state.users.map((user) => (
							<li
								className="list-group-item list-group-item-action"
								key={user._id}
								onDoubleClick={() => this.deleteUser(user._id)}
							>
								{user.username}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
