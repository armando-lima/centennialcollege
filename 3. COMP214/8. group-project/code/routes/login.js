const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", (req, res, next) => {
  res.render("login", { title: "Login" });
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      $or: [{ email }, { email: email }],
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid login credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid login credentials" });
    }

    req.session.loggedInUsername = req.body.email;

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

router.get("/protected-route", (req, res) => {
  if (!req.session.loggedInUsername) {
    return res.redirect("/login");
  }

  res.render("protected", { title: "Protected Route" });
});

module.exports = router;
