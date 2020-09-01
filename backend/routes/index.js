var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send-text', function(req, res, next) {
  const text = req.body.text;
  if(text === undefined || text === null || text === ''){
  	return res.status(400).send({error: 'Text cannot be blank'})
  }
  return res.json({data: text});
});

module.exports = router;
