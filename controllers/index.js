const { Booking, Cabana } = require("../models");

const getBooking = async (req, res) => {
  try {
    const booking = await Booking.find();
    return res.send(booking);
  } catch (error) {
    throw error;
  }
};

const getCabana = async (req, res) => {
  try {
    const cabana = await Cabana.find();
    return res.send(cabana);
  } catch (error) {
    throw error;
  }
};

const createBooking = async (req, res) => {
  try {
    const newBooking = await new Booking(req.body);
    await newBooking.save();
    return res.send(bookings);
  } catch (error) {
    throw error;
  }
};

const createCabana = async (req, res) => {
  try {
    const newCabana = await new Cabana(req.body);
    await newCabana.save();
    return res.send(cabana);
  } catch (error) {
    throw error;
  }
};

const updateBooking = async (req, res) => {
  try {
    const booking = req.params.Id;
    const updatedBooking = await Booking.update(req.body, {
      where: { id: objectId },
      returning: true,
    });
    res.send(updatedBooking);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getBooking,
  getCabana,
  createBooking,
  createCabana,
  updateBooking,
};
