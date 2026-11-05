let express = require("express");

let ProductosController = require("../controllers/ProductosController.js");
let ConsultarProductosController = require("../controllers/ConsultarProductosController.js");

let rutaProductos = express.Router();

let guardarC = new ProductosController();
let consultarC = new ConsultarProductosController();

rutaProductos.post("/productos", guardarC.guardar);
rutaProductos.get("/productos", consultarC.consultar);

module.exports = rutaProductos;