const { model, Schema } = require("mongoose");

const userSchema = Schema(
  {
    name: String,
    email: String,
    password: String,
    token: { type: String, default: null },
  },

  { versionKey: false }
);

const User = model("user", userSchema);

module.exports = { User };
