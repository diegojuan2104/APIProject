//imports express Router fuction
const { Router } = require('express');

//Router returns a object, this let us create new routes
const router = Router();

//imports all the logic from the link controllers
const { getLinks, postLinks, getLink, deleteLink, putLink } = require('../controllers/links_controller');

//Here, we set all the controllers
router
	.route('/')

	.get(getLinks)

	.post(postLinks);

router
	.route('/:id')

	.get(getLink)

	.put(putLink)

	.delete(deleteLink);

//Exports routes
module.exports = router;
