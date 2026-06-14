import { useState,useRef } from "react";
import type { Character } from "../interfaces/character";
import { getCharacters } from "../services/getCharacterService";

export const useCharacters = () => {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const charactersCache = useRef<Record<string, Character[]>>({});

    const fetchCharacters = async (query: string) => {
        setLoading(true);
        setError(null);

        if (charactersCache.current[query]) {
            setCharacters(charactersCache.current[query]);
            setLoading(false);
            return;
        }

        try {
            const busquedaCharacters = await getCharacters(query);
            setCharacters(busquedaCharacters);
            charactersCache.current[query] = busquedaCharacters;
            console.log("Characters Cache:", charactersCache.current);
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
            setCharacters([]);
        } finally {
            setLoading(false);
        }

    }

    return { characters, fetchCharacters, loading, error };
}