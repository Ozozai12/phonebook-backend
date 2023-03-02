const router = require("express").Router();

const { register, login, logout, current } = require("../../controllers/users");
const { auth } = require("../../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", auth, logout);
router.get("/current", auth, current);

module.exports = router;
