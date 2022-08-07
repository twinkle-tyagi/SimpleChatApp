const express = require('express');
const bodyParser = require('body-parser');

const login = require('./login.js');
const message = require('./message.js');

const chatApp = express();

chatApp.use(bodyParser.urlencoded({extended: false}));

chatApp.use(login);
chatApp.use(message);

chatApp.listen(3000);



