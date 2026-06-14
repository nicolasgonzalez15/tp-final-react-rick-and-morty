
import { createContext } from 'react'
import type { Character } from '../interfaces/character';


interface FavoritesContextProps{
    favorites: Character[];
    isFavorite: (id: number) => boolean;
    toggleFavorite: (character: Character) => void;
}


export const FavoritesContext = createContext<FavoritesContextProps>({} as FavoritesContextProps);

