
import { Link } from "react-router-dom";


function Registro() {

    const registrar = (e) => {
        e.preventDefault();
        alert("Registro realizado correctamente");
    };

    return (
        <div>
           

            <h1>Crear cuenta</h1>

            <form onSubmit={registrar}>

                <label>Nombre</label>
                <input type="text" required />

                <label>Correo electrónico</label>
                <input type="email" required />

                <label>Contraseña</label>
                <input type="password" required />

                <button type="submit">
                    Registrarse
                </button>

            </form>

            <p>
                ¿Ya tienes cuenta? <Link to="/">Iniciar sesión</Link>
            </p>
        </div>
    );
}

export default Registro;
