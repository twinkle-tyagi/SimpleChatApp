const express = require('express');
//const bodyParser = require('body-parser');

const login = express.Router();

//login.use(bodyParser.urlencoded({extended: false}));

login.get('/login', (req, res, next) => {
    res.send('<html> <body> <form onsubmit = "localStorage.setItem(`username`, document.getElementById(`username`).value)" action = "/login" method = "POST"> <input type = "text" name = "username" id ="username"> <button type = "submit"> LOGIN </button> </form> <body> </html>');
    //const username = document.getElementById('')
    //console.log(req.body);
    //localStorage.setItem(req.body);
});

login.post('/login', (req, res, next) => {
    res.redirect('/');
    //const username = document.getElementById('')
    //console.log(req.body);

    //res.redirect('/login');

});


module.exports = login;
