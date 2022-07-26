const { Booking, Cabana } = require("../models");

const getBooking = async (req, res) => {
  try {
    const bookings = await Booking.find();
    return res.status(200).json({ bookings });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCabana = async (req, res) => {
  try {
    const cabanas = await Cabana.find();
    return res.status(200).json({ cabanas });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createBooking = async (req, res) => {
  try {
    const booking = await new Booking(req.body);
    await booking.save();
    return res.status(201).json({
      booking,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const createCabana = async (req, res) => {
  try {
    const cabana = await new Cabana(req.body);
    await cabana.save();
    return res.status(201).json({
      cabana,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(booking);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Booking.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Booking deleted");
    }
    throw new Error("Booking not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getBooking,
  getCabana,
  createBooking,
  createCabana,
  updateBooking,
  deleteBooking,
};
