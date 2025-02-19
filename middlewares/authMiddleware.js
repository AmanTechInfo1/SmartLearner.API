const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.header("Authorization");
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET || "SMARTLEARNERJWT",
      (err) => {
        if (err) {
          console.log(err.message);
          res.redirect("/login");
        } else {
          next();
        }
      }
    );
  } else {
    res.redirect("/login");
  }
};
module.exports = { requireAuth };
