//imports dotenv, to work with environment vars
require('dotenv').config();
//imports all from de db
require('./database');

const app = require('./app');

async function main() {
	await app.listen(app.get('port'));
	console.log('Server on port:', app.get('port'));
}

main();
