const { Schema } = require("mongoose");

const Cabana = new Schema(
  {
    location: { type: String, required: true },
    types: { type: String, required: true },
    bookedDates: [{ type: String }],
    price: { type: String },
    image: { type: String },
  },

  { timestamps: true }
);
module.exports = Cabana;
