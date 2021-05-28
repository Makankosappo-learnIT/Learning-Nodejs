const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public', 'form.html'));
});

router.post('/', function(req, res){
    console.log(req.body);
    res.redirect('./form');
});

module.exports = router
