const jwt = require("jsonwebtoken");
function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) res.status(401).json({ msg: "No token, auth denied" });
  try {
    console.log("in1");
    const decoded = jwt.verify(token, "KMPR");
    console.log("in2");
    res.user = decoded;
    console.log("in3");
    next();
    console.log("in4");
  } catch (e) {
    res.status(400).json({ msg: "token is not valid" });
  }
}

module.exports = auth;
