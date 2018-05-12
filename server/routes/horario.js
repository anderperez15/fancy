var express = require('express');
var router = express.Router();


router.get('/horarios/:materias', function(req, res, next) {
 	var materias = req.params.materias;
 	console.log(materias);
 	return "hello";
});

module.exports = router;
