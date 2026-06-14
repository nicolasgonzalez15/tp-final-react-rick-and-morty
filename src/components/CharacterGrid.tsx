import type { Character } from "../interfaces/character"
import CharacterCard from "./CharacterCard"

interface CharacterGridProps {
    characters: Character[] | null
} 


const CharacterGrid = ({characters}:CharacterGridProps) => {
     // Si no hay resultados mostrar mensaje centrado
    if (characters === null) return null;

  if (!characters || characters.length === 0) {
    return (
      <section className="character-error-msj">
        <div role="alert">
          <div>
            <p>🔎 No se encontraron personajes.</p>
            <p>Prueba con otra búsqueda o recarga la página.</p>
          </div>
        </div>
      </section>
    )
  }
    return (
    <section className="character-grid">
      {characters.map((character)=>{
        return (
          <CharacterCard
            id={character.id}
            name={character.name}
            image={character.image}
            type={character.type}
            species={character.species}
            gender={character.gender}
            status={character.status}
            location={character.location}
            character={character}
            />
        )

      })}

    </section>
  )
}

export default CharacterGrid