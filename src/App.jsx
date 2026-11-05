
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Registro from "./pages/registro";
import Dashboard from "./pages/dashboard";
import Productos from "./pages/productos";
import Contacto from "./pages/contacto";

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/registro" element={<Registro />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/productos" element={<Productos />} />

                <Route path="/contacto" element={<Contacto />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
