let express = require('express');
let router = express.Router();

/* GET default page. */
router.get('/', function(request, response, next) {
  response.render('index', { title: 'Default', body: 'ExpressJS'});
});

/* GET home page. */
router.get('/home', function(request, response, next) {
  response.render('index', { title: 'Home', body: 'Welcome to the Home page'});
});

/* GET about me page. */
router.get('/about', function(request, response, next) {
  response.render('index', { title: 'About me', body: 'Welcome to the About Me page'});
});

/* GET contact me page. */
router.get('/contact', function(request, response, next) {
  response.render('index', { title: 'Contact me', body: 'Welcome to the Contact Me page'});
});

/* GET project page. */
router.get('/portfolio', function(request, response, next) {
  response.render('index', { title: 'Portfolio', body: 'Welcome to the Portfolio page'});
});

/* GET services page. */
router.get('/services', function(request, response, next) {
  response.render('index', { title: 'Services', body: 'Welcome to the Services page'});
});

module.exports = router;
