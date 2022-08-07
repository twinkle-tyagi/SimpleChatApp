const express = require('express');
const fs = require('fs');

const msg = express.Router();

const Data = [];

msg.get('/', (req, res, next) => {
    res.send('<html><body><form action = "/" onsubmit= "document.getElementById(`username`).value = localStorage.getItem(`username`)" method = "POST"> <input type = "text" id = "message" name="message"> <input type = "hidden" id = "username" name="username"> <button type="submit"> Message</button> </form></body></html>');
    //fs.writeFileSync('chat.txt', `${res.body.username}: ${req.body.message}`);
});

msg.post('/', (req, res, next) => {
    fs.writeFileSync('chat.txt', `${req.body.username}: ${req.body.message}`)
    //Data.push(`${req.body.username}: ${req.body.message}`);
    //console.log(Data);
    //fs.readFileSync()

    fs.readFile('chat.txt', (err, data) =>{
        console.log(data.toString());
    });

    //console.log(`${req.body.username}: ${req.body.message}`);
    res.redirect('/');
});

module.exports = msg;