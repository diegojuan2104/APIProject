//imports express Router fuction
const { Router } = require('express');

//Router returns a object, this let us create new routes
const router = Router();
//imports all the logic from the User controllers
const { getUser, postUsers, getUsers, deleteUser, putUser } = require('../controllers/user_controller');

//Here, we set all the controllers
router
	.route('/')

	.get(getUsers)

	.post(postUsers);

router
	.route('/:id')

	.get(getUser)

	.put(putUser)

	.delete(deleteUser);

//Exports routes
module.exports = router;
