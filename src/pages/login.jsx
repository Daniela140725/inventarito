
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const navegar = useNavigate();

    const iniciarSesion = (e) => {
        e.preventDefault();
        navegar("/dashboard");
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>

            <form onSubmit={iniciarSesion}>

                <label>Correo electrónico</label>
                <input
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />

                <label>Contraseña</label>
                <input
                    type="password"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                />

                <button type="submit">
                    Iniciar sesión
                </button>

            </form>

            <p>
                ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
            </p>
        </div>
    );
}

export default Login;
