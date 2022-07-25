const { Schema } = require("mongoose");

const Booking = new Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    cabanaId: { type: Schema.Types.ObjectId, ref: "Cabana" },
  },
  { timestamped: true }
);
module.exports = Booking;
