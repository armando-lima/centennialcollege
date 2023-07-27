/* @author:     Armando Lima  */
/* @studentid:  301235438     */
/* @date:       June 20, 2023 */
/* @filename:   users.js      */

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User management page');
});

module.exports = router;
