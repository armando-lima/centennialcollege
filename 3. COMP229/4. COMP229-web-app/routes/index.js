/* @author:     Armando Lima  */
/* @studentid:  301235438     */
/* @date:       June 20, 2023 */
/* @filename:   index.js      */

let express = require('express');
let router = express.Router();

/* GET default page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Default', body: 'ExpressJS'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', body: 'Welcome to the Home page'});
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me', body: 'Welcome to the About Me page'});
});

/* GET project page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio', body: 'Welcome to the Portfolio page'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', body: 'Welcome to the Services page'});
});

module.exports = router;
