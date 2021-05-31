const express = require('express');
const router = express.Router();
const path = require('path');
const tools = require('../tools');

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public', 'form.html'));
});

router.post('/', function(req, res){
    console.log(req.body);
    var name = req.body.First_Name + " " + req.body.Last_Name; 
    console.log(name);
    tools.input_data(name, req.body.Email);
    res.redirect('./form');
});

module.exports = router
