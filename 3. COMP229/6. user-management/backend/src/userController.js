let userService = require("./userService");

let saveUserInfoController = async (req, res) => {
  try {
    let status = await userService.saveUserInfoService(req.body);

    if (status) {
      res.send({ status: true, message: "UserInfo saved Successfully." });
    } else {
      res.send({ status: false, message: "Error in saving UserInfo." });
    }
  } catch (error) {
    console.log(error);
  }
};

let loginUserInfoController = async (req, res) => {
  let result = null;
  try {
    result = await userService.userLoginService(req.body);

    if (result.status) {
      res.send({ status: true, message: result.message });
    } else {
      res.send({ status: false, message: result.message });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.message });
  }
};

module.exports = { saveUserInfoController, loginUserInfoController };
