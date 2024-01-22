var express = require("express");
var router = express.Router();
const session = require("express-session");
const Chat = require("../models/chat");
const User = require("../models/user");

router.get("/", async (req, res, next) => {
  try {
    const loggedInUsername = req.session.loggedInUsername;
    const chatMessages = await Chat.find().sort({ date: -1 }).limit(10);

    // Fetch the list of users
    const users = await User.find();

    res.render("index", {
      title: "Discord",
      loggedInUsername,
      chatMessages,
      users,
    });
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    res.render("index", {
      title: "Discord",
      loggedInUsername,
      chatMessages: [],
      users: [],
    });
  }
});

router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "An error occurred" });
    }
    res.redirect("/login");
  });
});

router.post("/submit-chat", async (req, res, next) => {
  const loggedInUsername = req.session.loggedInUsername;
  const chatMessage = req.body.message;

  try {
    const newChat = new Chat({
      username: loggedInUsername,
      comment: chatMessage,
    });

    await newChat.save();

    res.status(200).json({ message: "Chat submitted successfully." });
  } catch (error) {
    console.error("Error submitting chat:", error);
    res
      .status(500)
      .json({ message: "An error occurred while submitting chat." });
  }
});

router.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users); // Send the users as JSON response
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching users." });
  }
});

module.exports = router;
