import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import CharacterCard from "./CharacterCard";


export const FavoriteGrid = () => {

  const {favorites} = useContext(FavoritesContext);

    if (favorites.length === 0) return null;

    if (!favorites || favorites.length === 0) {
    return (
      <section className="character-error-msj">
        <div role="alert">
          <div>
            <p>🔎 Aún no tenes personajes favoritos.</p>
            <p>Agregá nuevos personajes para completar la grilla.</p>
          </div>
        </div>
      </section>
    )
  }

      return (
    
    <section className="character-grid">
        <h2 style={{ margin: "1rem 0", gridColumn: "1 / -1" }}>Mis Personajes Favoritos</h2>
      {favorites.map((fav)=>{
        return (
            <CharacterCard
            id={fav.id}
            name={fav.name}
            image={fav.image}
            type={fav.type}
            species={fav.species}
            gender={fav.gender}
            status={fav.status}
            location={fav.location}
            character={fav}
            />
        )

      })}

    </section>
  )
}

export default FavoriteGrid