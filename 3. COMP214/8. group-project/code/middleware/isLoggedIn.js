module.exports = (req, res, next) => {
  if (req.session.loggedInUsername) {
    next();
  } else {
    res.redirect("/login");
  }
};
