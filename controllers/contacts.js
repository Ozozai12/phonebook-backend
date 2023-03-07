const { Contact } = require("../models/contact");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const data = await Contact.find({ owner: _id });
  res.json(data);
};

const addContact = async (req, res) => {
  const { name, number } = req.body;
  const { _id } = req.user;
  const newContact = await Contact.create({
    name,
    number,
    owner: _id,
  });
  res.status(201).json(newContact);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await Contact.findByIdAndDelete({ _id: id });
  res.json(deletedContact);
};

module.exports = { getAll, addContact, deleteContact };
