var lauragutierrez = 'lauragutierrez';
var mailnode1 = 'mailnode1';
var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')(lauragutierrez, mailnode1);
//var routes = require('./routes');


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('contact', { title: 'Contact' });	
});

router.post('/send', function(req, res, next) {
	var email = new sendgrid.Email ({
		to:       req.body.email,
		from:     'laura.gutierrez.tamayo@gmail.com',
		subject:  req.body.subject,
		text:     req.body.message
	});

	sendgrid.send(email, function(err, json) {
		if (err) { 
			return console.error(err);
		} else { 
			res.send('yesss');
		}
	});

});


module.exports = router;