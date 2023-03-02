const router = require("express").Router();
const {
  getAll,
  addContact,
  deleteContact,
} = require("../controllers/contacts");

router.get("/", getAll);
router.post("/add", addContact);
router.delete("/:id", deleteContact);

module.exports = router;
