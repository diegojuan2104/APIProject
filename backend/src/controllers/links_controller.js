//Object to save all the controllers
const linksCtrl = {};
//imports db model
const Link = require('../models/Link');

let linkValdation = (link) => {
	if (!link.link) {
		throw { ok: false, mensaje: 'The link is required' };
	}
	if (!link.name) {
		throw { ok: false, mensaje: 'The name is required' };
	}
};

//get all the links
linksCtrl.getLinks = async (req, res) => {
	try {
		const links = await Link.find();
		res.json(links);
	} catch (error) {
		res.send(error);
	}
};

// save a link, POST
linksCtrl.postLinks = async (req, res) => {
	try {
		const { name, description, link } = req.body;
		const newLink = new Link({ name, description, link });

		linkValdation(newLink);
		await newLink.save();
		console.log(newLink);
		res.send({ message: 'Link saved!' });
	} catch (error) {
		res.send(error);
	}
};

//get just One Link, GET
linksCtrl.getLink = async (req, res) => {
	try {
		const link = await Link.findById(req.params.id);
		res.json(link);
	} catch (error) {
		res.send(error);
	}
};

//apdate a link, PUT
linksCtrl.putLink = async (req, res) => {
	try {
		const { name, link, description } = req.body;
		await Link.findOneAndUpdate(req.params.id, { name, description, link });
		res.send({ message: 'Link Updated' });
	} catch (error) {
		res.send(error);
	}
};

//delete a link,DELETE
linksCtrl.deleteLink = async (req, res) => {
	try {
		await Link.findByIdAndDelete(req.params.id);
		res.send({ message: 'Link Deleted' });
	} catch (error) {
		res.send(error);
	}
};

//Exports all the link controllers
module.exports = linksCtrl;
