let mysql = require("mysql2");

// Conexion a la base de datos
let conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "inventario",
    port: 3306
});

conectar.connect((error) => {
    if (error) {
        console.error("Error en la conexion a la base de datos:", error.message);
        return;
    }
    else {
        console.log("Conexion exitosa a la base de datos");
    }
});

module.exports = conectar;