const express = require("express");
const lecturaSensorControllers = require('../controllers/sensorController')
const router = express.Router();

router.post("/", lecturaSensorControllers.crearDato);
router.get("/", lecturaSensorControllers.verDato);
router.get("/:id", lecturaSensorControllers.verDatoId);
router.put("/:id", lecturaSensorControllers.editarDato);
router.delete("/:id", lecturaSensorControllers.eliminarDato);
router.get("/rango/min=:dato1&max=:dato2", lecturaSensorControllers.rangoDato);

module.exports = router