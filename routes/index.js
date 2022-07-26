const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send(" Cabana in root!"));

router.get("/booking", controllers.getBooking);

router.get("/cabana", controllers.getCabana);

router.post("/create-booking", controllers.createBooking);

router.post("/create-cabana", controllers.createCabana);

router.post("/update-booking", controllers.updateBooking);

router.post("/update-booking/:id", controllers.updateBooking);

router.delete("/delete-booking", controllers.deleteBooking);

router.delete("/delete-booking/:id", controllers.deleteBooking);

module.exports = router;
