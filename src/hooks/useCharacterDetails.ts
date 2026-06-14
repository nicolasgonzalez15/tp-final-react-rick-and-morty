import type { Character } from "../interfaces/character";
import {getCharacterById} from "../services/getCharacterService"
import { useState, useEffect } from "react";

interface useCharacterDetailsProps {
  character: Character | null;
  loading: boolean;
  error: string | null;
}


export const useCharacterDetails = (id:number | undefined):useCharacterDetailsProps => {

   const [character, setCharacter] = useState<Character | null>(null);
   const [loading, setLoading] = useState(!!id);
   const [error, setError] = useState<string | null>(id ? null : "ID de personaje inválido");

    useEffect(() => {
    if (!id) return;

    let cancelled = false;

    async function fetchGif() {
      setLoading(true);
      setError(null);

      try {
        const result = await getCharacterById(id!);
        console.log("Resultado de getCharacterById:", result);
        if (!cancelled) setCharacter(result);
      } catch (err) {
        if (!cancelled) setError((err as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchGif();

    return () => { cancelled = true; };
  }, [id]);

    return (
    {character, loading, error}
  )
}

