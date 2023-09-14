let mongoose = require("mongoose");

//Create Model of Product
let userModel = mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("User", userModel);
