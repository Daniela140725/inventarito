import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav>
            <h2>Inventario</h2>

            <Link to="/dashboard">Inicio</Link>

            <Link to="/productos">Productos</Link>

            <Link to="/contacto">Contacto</Link>

            <Link to="/">Cerrar sesión</Link>
        </nav>
    );
}

export default Navbar;