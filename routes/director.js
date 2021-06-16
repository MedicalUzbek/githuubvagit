const express = require('express');
const router = express.Router();
const Director = require('../model/Director');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* post users listing. */
router.post('/', function(req, res, next) {
  const director = new Director(req.body);

  const promise = director.save();

  promise.then(data => res.json(data))
  .catch(err => {
    console.log(err);
  })
});

module.exports = router;
