const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");

const { DB_HOST, PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

mongoose.set("strictQuery", true);

mongoose.connect(DB_HOST, () => console.log("Database connected"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
