const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactsRouter = require("./router/contacts");
const usersRouter = require("./router/users");

const { DB_HOST, PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/contacts", contactsRouter);
app.use("/users", usersRouter);

mongoose.set("strictQuery", true);

mongoose.connect(DB_HOST, () => console.log("Database connected"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
