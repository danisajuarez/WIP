import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Iconos de menú y cerrar

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Consultora WIP
        </Link>

        {/* Botón de menú en móviles */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>
          <Link to="/services" className="hover:underline">
            Servicios
          </Link>
          <Link to="/upload-cv" className="hover:underline">
            Cargar CV
          </Link>
        </div>
      </div>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-gray-900 p-4 rounded-lg transition-all">
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/services"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link
            to="/upload-cv"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Cargar CV
          </Link>
        </div>
      )}
    </nav>
  );
}
