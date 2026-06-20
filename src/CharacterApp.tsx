import { useContext } from "react";
import { Link, Route, Routes, useLocation } from "react-router";
import { FavoritesContext } from "./context/FavoritesContext";
import SearchPage from "./pages/SearchPage";
import FavoritePage from "./pages/FavoritePage"; // Asegurate de crear esta página
import { CharacterDetails } from "./pages/CharacterDetails";
import { NotFound } from "./pages/NotFound"; // Asegurate de crear esta página
import { ContactPage } from "./pages/ContactPage"
import { ContactSuccessPage } from "./pages/ContactSuccessPage"

const CharacterApp = () => {
  const { favorites } = useContext(FavoritesContext);
  const { pathname } = useLocation();

  // Controla la visibilidad de la navegación igual que en GifApp
  const showNav = pathname === "/" || pathname === "/favoritos" || pathname === "/contacto";

  return (
    <>
      {showNav && (
        <nav className="nav-container">
          <Link to="/" className={`nav-btn ${pathname === "/" ? "active" : ""}`}>
            🔍 Buscar Personajes
          </Link>
          <Link to="/favoritos" className={`nav-btn ${pathname === "/favoritos" ? "active" : ""}`}>
            ❤️ Mis Favoritos ({favorites.length})
          </Link>
          <Link to="/contacto" className={`nav-btn ${pathname === "/contacto" ? "active" : ""}`}>
            ✉️ Contacto
          </Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/favoritos" element={<FavoritePage />} />
        <Route path="/personaje/:id" element={<CharacterDetails />} />
        <Route path="/contacto" element={<ContactPage/>} />
        <Route path="/contacto-exito" element={<ContactSuccessPage/>} />
        <Route path="*" element={<NotFound codError="404" tituloError="Página no encontrada" msjError="La ruta que buscás no existe." />} />
      </Routes>
    </>
  );
};

export default CharacterApp;