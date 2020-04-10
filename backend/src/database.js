//imports mongoose to MongoDB validation, casting, and business logic
const mongoose = require('mongoose');

//Select a URI from the environment vars, for more security or default
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/myLinksdb';
console.log(URI);

//Default mongo connect
mongoose.connect(URI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

//returns an object, which opens the db connection
const connection = mongoose.connection;

connection.once('open', () => {
	console.log('Database is conected');
});
