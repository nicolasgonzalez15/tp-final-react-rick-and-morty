import { useState,useEffect } from 'react';

export const useHistory = (historialInicial:string[] = []) => {
  const [busquedasPrevias, setBusquedasPrevias] = useState<string[]>(() => {
    const busquedasIniciales = localStorage.getItem('search-history');
    return busquedasIniciales ? JSON.parse(busquedasIniciales) : historialInicial;
  });

    useEffect(() => {
            localStorage.setItem('search-history', JSON.stringify(busquedasPrevias));
        }, [busquedasPrevias]);


    const addToHistory = (query:string) => {
        const queryNormalizada = query.trim().toLocaleLowerCase();
        if (queryNormalizada.length === 0) return;
        if (busquedasPrevias.includes(queryNormalizada)) return;

        const busquedasActuales = [queryNormalizada, ...busquedasPrevias.slice(0,9)];

        /*const busquedasActuales = busquedasPrevias.slice(0,10);
        busquedasActuales.unshift(queryNormalizada);
        setBusquedasPrevias([query, ...busquedasActuales]);*/
        setBusquedasPrevias(busquedasActuales);
    }

    return {busquedasPrevias, addToHistory};
}

