const express = require("express");
const cors = require("cors");

const lecturaSensor = require('./router/sensorRouter')

const app = express();
app.use(express.json());
app.use(cors());

app.use("/lecturaSensor", lecturaSensor);

app.listen(8082, () => {
  console.log("servidor iniciando...");
});