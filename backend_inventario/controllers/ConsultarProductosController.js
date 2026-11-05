let conectar = require("../config/conexion.js");

class ConsultarProductosController {

    consultar(req, res) {

        let sql = "SELECT * FROM productos";

        conectar.query(sql, (error, resultado) => {

            if (error) {
                console.error(error);

                res.status(500).json({
                    mensaje: "Error al consultar los productos"
                });
            }
            else {
                res.status(200).json({
                    productos: resultado
                });
            }

        });

    }

}

module.exports = ConsultarProductosController;