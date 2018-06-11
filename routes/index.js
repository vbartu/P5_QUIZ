var express = require('express');
var router = express.Router();
var {models} = require('../model.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/credits', function(req, res) {
  res.render('credits', { title: 'Express' });
});

router.get('/quizzes', function(req, res) {
  models.quiz.findAll()
  .then(quizzes => {
    res.render('quizzes', {quizzes : quizzes})
  });
});

module.exports = router;
