const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/', function(req, res, next){
    console.log('hihihihih');
    next();
});
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;