const jwt = require("jsonwebtoken");



const verifyToken = (req, res, next) => {
  const authorization =
    req.body.token || req.query.token || req.headers["authorization"];

  if (!authorization) {
    return res.status(403).send("A token is required for authentication");
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
