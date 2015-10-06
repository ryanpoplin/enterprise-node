var express = require('express');
var router = express.Router();

var model = require('./../lib/model/model-index');

/* GET home page. */
router.get('/', function(req, res) {
	// just testing...
	model.logger('You\'re at the index view...');
  	res.render('index', { title: 'Photoalbums' });
});

module.exports = router;