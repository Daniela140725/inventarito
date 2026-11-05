
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Productos() {

    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidad, setCantidad] = useState("");

    const [productos, setProductos] = useState([]);
    const [mensaje, setMensaje] = useState("");

    // Consultar productos
    async function consultarProductos() {
        try {
            let respuesta = await fetch("http://localhost:3000/api/productos");
            let datos = await respuesta.json();

            if (!respuesta.ok) {
                throw new Error("Error al consultar productos");
            }

            setProductos(datos.productos);

        } catch (error) {
            setMensaje("No se pudieron consultar los productos");
            console.error(error);
        }
    }

    // Consultar productos al cargar la página
    useEffect(() => {
        consultarProductos();
    }, []);

    // Guardar producto
    const guardarProducto = async (e) => {
        e.preventDefault();
        setMensaje("");

        if (nombre.trim() === "") {
            setMensaje("Escribe el nombre del producto");
            return;
        }

        if (categoria.trim() === "") {
            setMensaje("Escribe la categoría");
            return;
        }

        if (precio === "") {
            setMensaje("Escribe el precio");
            return;
        }

        if (Number(precio) < 0) {
            setMensaje("El precio no puede ser negativo");
            return;
        }

        if (cantidad === "") {
            setMensaje("Escribe la cantidad");
            return;
        }

        if (Number(cantidad) < 0) {
            setMensaje("La cantidad no puede ser negativa");
            return;
        }

        try {
            let respuesta = await fetch("http://localhost:3000/api/productos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre: nombre,
                    categoria: categoria,
                    precio: Number(precio),
                    cantidad: Number(cantidad)
                })
            });

            let datos = await respuesta.json();

            if (!respuesta.ok) {
                throw new Error(datos.mensaje);
            }

            setMensaje("Producto guardado correctamente");

            setNombre("");
            setCategoria("");
            setPrecio("");
            setCantidad("");

            consultarProductos();

        } catch (error) {
            setMensaje("No se pudo guardar el producto");
            console.error(error);
        }
    };

    return (
        <div>
            <Navbar />

            <h1>Gestión de productos</h1>

            <form onSubmit={guardarProducto}>

                <label>Nombre del producto</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />

                <label>Categoría</label>
                <input
                    type="text"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required
                />

                <label>Precio</label>
                <input
                    type="number"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    min="0"
                    required
                />

                <label>Cantidad disponible</label>
                <input
                    type="number"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    min="0"
                    required
                />

                <button type="submit">
                    Guardar producto
                </button>

            </form>

            <p>{mensaje}</p>

            <h2>Lista de productos</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>

                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.categoria}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Productos;
