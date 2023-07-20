let userModel = require("./userModel");
let key = "secretpassword123456";
let encryptor = require("simple-encryptor")(key);

module.exports.saveUserInfoService = (userDetails) => {
  return new Promise((resolve, reject) => {
    let userModelData = new userModel();
    userModelData.username = userDetails.username;
    userModelData.email = userDetails.email;
    userModelData.password = encryptor.encrypt(userDetails.password);

    // All the 3 codes below do the same thing:
    userModelData.save(function resultHandle(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });

    /*
    userModelData
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
    */
    /*
    userModelData
      .saveUserInfo(userDetails)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
      */
  });
};

module.exports.userLoginService = (userLoginDetails) => {
    return new Promise(function userLoginPromise(resolve, reject) {
        userModel.findOne({email: userLoginDetails.email}, function userLoginResult(error, result){
            if(error){
                reject({status: false, message: "Error while fetching user details"});
            }
            else{
                if(result != undefined && result != null){
                    let decryptedPassword = encryptor.decrypt(result.password);
                    if(decryptedPassword == userLoginDetails.password){
                        resolve({status: true, message: "User logged in successfully"});
                    }
                    else{
                        reject({status: false, message: "Incorrect password"});
                    }
                }
            }
        });
    });
};
