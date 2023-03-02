const { model, Schema } = require("mongoose");

const contactSchema = Schema(
  {
    name: String,
    number: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

const Contact = model("contact", contactSchema);

module.exports = { Contact };
