const router = require("express").Router();
const {
  getAll,
  addContact,
  deleteContact,
} = require("../../controllers/contacts");
const { auth } = require("../../middleware/auth");

router.get("/", auth, getAll);
router.post("/add", auth, addContact);
router.delete("/:id", auth, deleteContact);

module.exports = router;
