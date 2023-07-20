let userService = require("./userService");

let saveUserInfoController = async(request, response) => {
    try {
        let userDetails = request.body;
        let status = await userService.saveUserInfoService(userDetails);
        //response.status(200).json(status);
        if(!status){
            response.send({"status": true, message: "User details saved successfully"});
        }
        else{
            response.send({"status": false, message: "Error while saving user details"});
        }
    }
    catch(error) {
        response.status(500).json(error);
    }
}

let loginUserInfoController = async(request, response) => {
    try {
        let userLoginDetails = request.body;
        let status = await userService.userLoginService(userLoginDetails);
        //response.status(200).json(status);
        if(!status.status){
            response.send({"status": true, message: "User details saved successfully"});
        }
        else{
            response.send({"status": false, message: "Error while saving user details"});
        }
    }
    catch(error) {
        //response.status(500).json(error);
        response.send({"status": false, message: "Error while saving user details"});
    }
}

module.exports = { saveUserInfoController, loginUserInfoController };