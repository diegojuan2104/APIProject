//Object to save all the controllers
const linksCtrl = {};
//imports db model
const Link = require('../models/Link');

//get all the links
linksCtrl.getLinks = async (req, res) => {
	const links = await Link.find();
	res.json(links);
};

// save a link, POST
linksCtrl.postLinks = async (req, res) => {
	const { title, link, description, date, author } = req.body;
	const newLink = new Link({ title, link, description, date, author });
	await newLink.save();
	console.log(newLink);
	res.send({ message: 'Link saved!' });
};

//get just One Link, GET
linksCtrl.getLink = async (req, res) => {
	const link = await Link.findById(req.params.id);
	res.json(link);
};

//apdate a link, PUT
linksCtrl.putLink = async (req, res) => {
	const { title, link, description, author } = req.body;
	await Link.findOneAndUpdate(req.params.id, { title, author, description, link });
	res.send({ message: 'Link Updated' });
};

//delete a link,DELETE
linksCtrl.deleteLink = async (req, res) => {
	const link = await Link.findByIdAndDelete(req.params.id);
	res.send({ message: 'Link Deleted' });
};

//Exports all the link controllers
module.exports = linksCtrl;
