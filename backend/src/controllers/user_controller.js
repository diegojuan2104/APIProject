//Object to save all the controllers
const userCtrl = {};

//import db model
const User = require('../models/User');

//get all the users, GET
userCtrl.getUsers = async (req, res) => {
	const users = await Link.find();
	res.json(users);
};

//to save a User, POST
userCtrl.postUsers = async (req, res) => {
	const { username } = req.body;
	const newUser = new User({ username });
	await newUser.save();
	res.send({ message: 'User saved!' });
};

//get just One user, GET
userCtrl.getUser = async (req, res) => {
	const user = await User.findById(req.params.id);
	res.json(user);
};

//to update a user, PUT
userCtrl.putUser = async (req, res) => {
	const { username } = req.body;
	await User.findOneAndUpdate(req.params.id, { username });
	res.send({ message: 'User Updated' });
};

//delete a User,DELETE
userCtrl.deleteUser = async (req, res) => {
	const { username } = req.body;
	await User.findOneAndUpdate(req.params.id, { username });
	res.send({ message: 'User updated Updated' });
};

//Exports all the user controllers
module.exports = userCtrl;
