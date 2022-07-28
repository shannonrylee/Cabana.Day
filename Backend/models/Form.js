const { Schema } = require("mongoose");

const Form = new Schema(
  {
    name: { type: String, required: true },
    date: [{ type: String, required: true }],
  },
  { timestamp: true }
);
module.exports = Form;
