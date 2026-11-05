let express = require("express");
let cors = require("cors");
let rutaProductos = require("./routes/ProductoRoutes.js");

const app = express();

const PORT = 3000;

// Configuraciones
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api", rutaProductos);

app.listen(PORT, () => {
    console.log("Servidor en ejecucion en el puerto: " + PORT);
});