const { Contact } = require("../models/contact");

const getAll = async (req, res) => {
  const data = await Contact.find();
  res.send(data);
};

const addContact = async (req, res) => {
  const { name, number } = req.body;
  const newContact = await Contact.create({ name, number });
  res.status(201).send(newContact);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await Contact.findByIdAndDelete({ _id: id });
  res.send(deletedContact);
};

module.exports = { getAll, addContact, deleteContact };
