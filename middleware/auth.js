const jwt = require("jsonwebtoken");
require("dotenv").config();

const { User } = require("../models/user");

const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split("");

  if (!bearer || bearer !== "Bearer") {
    return res.status(401).json("Unauthorized");
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const candidate = await User.findById(id);
    if (!candidate || candidate.token !== token) {
      return res.status(401).json("Unauthorized");
    }
    req.user = candidate;
    next();
  } catch (err) {
    return res.status(401).json("Unauthorized");
  }
};

module.exports = auth;
