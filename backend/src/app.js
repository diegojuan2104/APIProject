const express = require('express');
const cors = require('cors');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(express.json());

//import all the created routes
app.use('/api/links', require('./routes/links'));

module.exports = app;
