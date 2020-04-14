//imports mongoose to MongoDB validation, casting and business logic
const { Schema, model } = require('mongoose');

//Link Model/Schema, its like a table in SQl
const linkSchema = new Schema(
	{
		name: String,
		link: String,
		description: String,
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

//Exports all the links schemas
module.exports = model('Link', linkSchema);
