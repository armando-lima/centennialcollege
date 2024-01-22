let mongoose = require("mongoose");

// Create Model of Product
let chatModel = mongoose.Schema(
  {
    username: String,
    comment: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "chat",
  }
);

module.exports = mongoose.model("Chat", chatModel);
