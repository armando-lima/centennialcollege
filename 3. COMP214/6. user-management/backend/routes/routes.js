let express = require('express');
const router = express.Router();
let userController = require('../src/userController');

router.route('/user/save').post(userController.saveUserInfoController);
router.route('/user/login').post(userController.loginUserInfoController);

module.exports = router;