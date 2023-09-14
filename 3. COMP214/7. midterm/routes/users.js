let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(request, response, next) {
  res.send('User management page');
});

module.exports = router;
