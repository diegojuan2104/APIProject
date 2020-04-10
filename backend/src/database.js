const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/myLinksdb';
console.log(URI);

/**
Ejecutando conexión con mongo
 */
mongoose.connect(URI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('Database is conected');
});
