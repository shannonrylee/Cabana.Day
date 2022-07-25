const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send(" Cabana in root!"));

router.get("/bookings", controllers.getBooking);

router.get("/cabanas", controllers.getCabana);

router.post("/create-bookings", controllers.createBooking);

router.post("/create-cabanas", controllers.createCabana);

module.exports = router;
