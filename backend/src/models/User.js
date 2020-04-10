//imports mongoose to MongoDB validation, casting and business logic
const { Schema, model } = require('mongoose');

//Link Model/Schema, its like a table in SQl
const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
);

//Exports all the Users schemas
module.exports = model('User', userSchema);
