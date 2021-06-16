const express = require('express');
const router = express.Router();
const Users = require('../model/Users');
const bcrypt = require('bcryptjs');


/* GET home page. */
router.get('/register/', function (req, res, next) {
  res.render('index', { title: 'Index Page' });
});

/* post home page. */
router.post('/register/', function (req, res, next) {
  // const user = new Users(req.body);

  const { username, password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    const user = new Users({
      username,
      password: hash
    })


    const promise = user.save();
    promise.then(data => res.json(data))
      .catch(err => console.log(err))
  })
});

module.exports = router;
