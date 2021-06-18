const express = require('express');
const router = express.Router();
const Users = require('../model/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


/* GET home page. */
router.get('/', function (req, res, next) {
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

router.post('/autenticate', function(req, res, next) {
  const {username, password} = req.body;

  Users.findOne({username}, (err, user) => {
    if(err)
      throw err;
    if(!user){
      res.json({
        status: "topilmadi",
        message: "kirish muafaqiyatsiz, name hato"
      })
    }
    else{
      bcrypt.compare(password, user.password).then((resul) => {
        if(!resul){
          res.json({
            status: false,
            message: 'foydalanuvchi parol hato'
          })
        }
        else{
          const payload = {username}
          const token = jwt.sign(payload, req.app.get('app_secret_key'), {
            expiresIn: 720
          })
          res.json({
            status: true,
            token
          })
        }
      })
    }
  })
})

module.exports = router;
