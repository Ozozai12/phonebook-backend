const router = require("express").Router();

const { signup, login, logout, current } = require("../controllers/users");
const auth = require("../middleware/auth");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", auth, logout);
router.get("/current", auth, current);

module.exports = router;
