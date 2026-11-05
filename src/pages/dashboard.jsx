
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
function Dashboard() {

    const navegar = useNavigate();

    const cerrarSesion = () => {
        navegar("/");
    };

    return (
        <div>
            <Navbar />
            <h1>Panel principal</h1>

            <h2>Bienvenido al sistema de inventario</h2>

            <p>Selecciona una opción:</p>

            <Link to="/productos">
                <button>Productos</button>
            </Link>

            <Link to="/contacto">
                <button>Contacto</button>
            </Link>

            <button onClick={cerrarSesion}>
                Cerrar sesión
            </button>
        </div>
    );
}

export default Dashboard;
