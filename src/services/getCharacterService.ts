import axios from 'axios';
import type { CharactersAPI} from '../interfaces/characterResponse';
import type { Character } from '../interfaces/character';


export const getCharacters = async( query: string): Promise<Character[]> => {
    const response = await axios.get<CharactersAPI>(import.meta.env.VITE_URL_BASE,{
    params:{
        name: query
    },
    headers: {
        "Content-Type": "application/json"
    }
});

    return response.data.results.map(character => ({
        id: character.id,
        name: character.name,
        image: character.image,
        type: character.type,
        species: character.species,
        gender: character.gender,
        status: character.status,
        location: character.location.name
    }))
}

export const getCharacterById = async (id: number): Promise<Character> => {
    const baseUrl = (import.meta.env.VITE_URL_BASE as string) ?? "https://rickandmortyapi.com/api/character";
    const url = `${baseUrl.replace(/\/$/, "")}/${id}`;

    const response = await axios.get<any>(url, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    // response.data puede ser directamente el personaje o un wrapper { results: [...] }
    const data = response.data;
    const character = Array.isArray(data?.results) ? data.results[0] : data;

    return {
        id: character?.id ?? 0,
        name: character?.name ?? "",
        image: character?.image ?? "",
        type: character?.type ?? "",
        species: character?.species ?? "",
        gender: character?.gender ?? "",
        status: character?.status ?? "",
        location: typeof character?.location === "string" ? character.location : (character?.location?.name ?? "")
    };
}