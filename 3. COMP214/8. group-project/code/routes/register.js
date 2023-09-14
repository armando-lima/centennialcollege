let express = require("express");
let router = express.Router();
let bcrypt = require("bcrypt"); // Add this line
let User = require("../models/user");

router.get("/", (req, res, next) => {
  res.render("register", { title: "Register" });
});

router.post("/", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Redirect the user after successful registration
    res.redirect("/login");
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = router;
