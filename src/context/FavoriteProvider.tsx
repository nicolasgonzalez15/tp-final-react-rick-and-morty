import { FavoritesContext } from "./FavoritesContext";
import { useState, useEffect } from "react";
import type { Character } from "../interfaces/character";

interface Props {
    children: React.ReactNode;
}

export const FavoriteProvider = ({children}: Props) => {

        const [favorites, setFavorites] = useState<Character[]>(() => {
            const localData = localStorage.getItem('favorite-characters');
            return localData ? JSON.parse(localData) : [];
        });
    
        useEffect(() => {
            localStorage.setItem('favorite-characters', JSON.stringify(favorites));
        }, [favorites]);
    
        const isFavorite = (id:number) =>{
            return favorites.some(fav => fav.id === id);
        }

        const toggleFavorite = (character:Character) => {
            if (isFavorite(character.id)) {
                setFavorites(favorites.filter(fav => fav.id !== character.id));
            }
            else {
                setFavorites([...favorites, character]);
            }
        }


  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
        {children}
    </FavoritesContext.Provider>
  )
}
