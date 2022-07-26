const { model } = require("mongoose");
const BookingSchema = require("./Booking");
const CabanaSchema = require("./Cabana");

const Booking = model("Booking", BookingSchema);
const Cabana = model("Cabana", CabanaSchema);

module.exports = {
  Booking,
  Cabana,
};
