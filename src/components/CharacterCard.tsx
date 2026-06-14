import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext';
import type { Character } from '../interfaces/character';
import { Link } from 'react-router';

interface CharacterCardProps{
    id: number,
    name: string,
    image: string,
    type: string,
    species: string,
    gender: string,
    status: string,
    location: string,
    character: Character
}


const CharacterCard = ({id,name,image,type,species,gender,status,location,character}:CharacterCardProps) => {
  
    const {isFavorite, toggleFavorite} = useContext(FavoritesContext);

  return (
        <div key={id} className="character-card">
          <Link to={`/personaje/${id}`} key={id} className="character-card">
            <img src={image} alt={name} />
            <h2>{name.toUpperCase()}</h2>
            <div className="character-stats">
                <p>Tipo: {type || 'N/A'} </p>
                <p>Especie: {species}</p>
                <p>Género: {gender}</p>
                <p>Estado: {status}</p>
                <p>Ubicación: ${location}</p>
            </div>
            </Link>
            <button className='btn-favorite' onClick={() => toggleFavorite(character)}>
              {isFavorite(id) ? "❤️ Eliminar de Favoritos" : "🤍 Agregar a Favoritos"}
            </button>

      </div>
  )
}

export default CharacterCard