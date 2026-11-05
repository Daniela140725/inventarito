let conectar = require("../config/conexion.js");

class ProductosController {

    guardar(req, res) {

        let nombre = req.body.nombre;
        let categoria = req.body.categoria;
        let precio = req.body.precio;
        let cantidad = req.body.cantidad;

        let sql = "INSERT INTO productos (nombre, categoria, precio, cantidad) VALUES (?, ?, ?, ?)";

        conectar.query(sql, [nombre, categoria, precio, cantidad], (error, resultado) => {

            if (error) {
                console.error(error);
                res.status(500).json({
                    mensaje: "Error al guardar el producto"
                });
            }
            else {
                res.status(201).json({
                    mensaje: "Producto guardado correctamente",
                    id: resultado.insertId
                });
            }

        });

    }

}

module.exports = ProductosController;