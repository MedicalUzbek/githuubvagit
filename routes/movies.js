const express = require("express");
const router = express.Router();

const Movie = require('../model/Movies')




/* POST users listing. */
router.post("/", (req, res, next) => {
  // const data = req.body;
  // res.json(data);

  // console.log(data);

  // const { title, category, country, year, imdb_score } = req.body;

  // const movie = new Movie({
  //   title: title,
  //   category: category,
  //   country: country,
  //   year: year,
  //   imdb_score: imdb_score,
  // })

  const movie = new Movie(req.body);

  const promise = movie.save();

  promise.then(data => {
    res.json(data)
  }).catch(err => {
    console.log(err);
  })
});


router.get('/', function(req,res, next){
  const promise = Movie.find({});

  promise.then(movie =>{
    res.json(movie)
  }).catch(err => {
    console.log(err);
  })
});

// GET ID orqali tutish

router.get('/:movie_id', function(req,res, next){
  const promise = Movie.findById(req.params.movie_id);

  promise.then(movie =>{
    res.json(movie)
  }).catch(err => {
    console.log(err);
  })
});

// GET id orqali put qilish
router.put('/:movie_id', function(req,res, next){
  const promise = Movie.findByIdAndUpdate(req.params.movie_id, req.body);

  promise.then(movie =>{
    res.json(movie)
  }).catch(err => {
    console.log(err);
  })
});


// GET id orqali Delete qilish
router.delete('/:movie_id', function(req,res, next){
  const promise = Movie.findByIdAndRemove(req.params.movie_id);

  promise.then(movie =>{
    res.json(movie)
  }).catch(err => {
    console.log(err);
  })
});

// GET Top 10 musicni chiqarish

router.get('/top/top10', function(req,res, next){
  const promise = Movie.find({}).limit(10).sort({imdb_score: 1});

  promise.then(movie =>{
    res.json(movie)
  }).catch(err => {
    console.log(err);
  })
});

module.exports = router;
