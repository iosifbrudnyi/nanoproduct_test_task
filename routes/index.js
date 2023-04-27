const Router = require("express")
const router = new Router();

const appointmentController = require('../controllers/appointmentController');
const doctorController = require("../controllers/doctorController");
const userController = require("../controllers/userController");

router.post('/create_user', userController.create)
router.post('/create_doctor', doctorController.create)
router.post('/create_appointment', appointmentController.create)

router.get('/get_user', userController.get)



module.exports = router