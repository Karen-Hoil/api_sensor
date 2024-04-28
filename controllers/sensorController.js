const connection = require("../database");

function crearDato(request, response) {
  const { mensaje, dato_sensor } = request.body;
  connection.query(
    'INSERT INTO practica1 (mensaje, dato_sensor) VALUES (?, ?)',
    [mensaje, dato_sensor],
    (error, results) => {
      if (error) {
        console.error("Error al agregar datos", error);
        response.status(500).json({ error: "Error al agregar datos" });
      } else {
        response.json({ message: "datos agregados" });
      }
    }
  );
}

function verDato(request, response) {
  connection.query(`SELECT * FROM practica1`, (error, results) => {
    if (error) {
      console.error("Error al obtener los datos:", error);
      response.status(500).json({ error: "Error al obtener los datos" });
    } else {
      response.status(200).json(results);
    }
  });
}

function verDatoId(request, response) {
  const lectura = request.params.id;

  connection.query(
    `SELECT * FROM practica1 WHERE id_tabla = ?;`,
    [lectura],
    (error, results) => {
      if (error) {
        console.error("Error al obtener el dato:", error);
        response.status(500).json({ error: "Error al obtener el dato:" });
      } else {
        response.status(200).json(results);
      }
    }
  );
}

const editarDato = (req, res) => {
  const id = req.params.id_tabla;
  const { mensaje, dato_sensor } = req.body;

  connection.query(
    'UPDATE practica1 SET mensaje = ?, dato_sensor = ? WHERE id_tabla = ?',
    [mensaje, dato_sensor, id],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Ocurrio un error al actualizar la flor" });
      } else {
        res.status(200).json({ message: "La flor fue actualizado correctamente" });
      }
    }
  );
};

const eliminarDato = (req,res) => {
    const id = req.params.id;
  
    connection.query('DELETE FROM practica1 WHERE id_tabla = ?',[id],(error) => {
        console.error("Error".error);
        if (error){
            console.error("Error al eliminar el dato",error);
            res.status(500).json({error :"Ocurrio un error al eliminar el dato"});
        }else{
            res.json({message:"El dato fue elimanado correctamente"});
        }
    });
  }

  const rangoDato = (req,res) =>{
    const dato1 = req.params.dato1;
    const dato2 = req.params.dato2;
    console.log(dato1 + "" + dato2);
    connection.query("SELECT * FROM practica1 WHERE dato_sensor BETWEEN ? AND ?", [dato1, dato2], (error,results)=>{
      if (error){
        console.error("Error al eliminar el dato",error);
        res.status(500).json({error :"Ocurrio un error al buscar los datos"});
    }else{
        res.status(200).json(results);
    }
    });
  
  };
module.exports = {
  crearDato,
  verDato,
  verDatoId,
  editarDato,
  eliminarDato,
  rangoDato
};