const { model } = require("mongoose");
const BookingSchema = require("./Bookings");
const CabanaSchema = require("./Cabanas");

const Booking = model("Booking", BookingSchema);
const Cabana = model("Cabana", CabanaSchema);

module.exports = {
  Booking,
  Cabana,
};
