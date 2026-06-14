import React, { useEffect, useRef, useState } from "react";

interface InputSearchProps {
    onSearch: (query: string) => void
}

const InputSearch = ({onSearch}:InputSearchProps) => {

  const [query, setQuery] = useState<string>("");
  const timeoutRef = useRef<number | null>(null);


  // Limpia timeout al desmontar
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, []);

   const debouncedSearch = (q: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      onSearch(q);
      timeoutRef.current = null;
      setQuery("");
    }, 1000);
  }



  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(query);
      setQuery("");
    }
  }

  return (
    <section className="search-container">
        <input type="text" placeholder="Buscar personajes..." id="input-search" name="input-search" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown}/>
        <button className="btn-search" onClick={() => debouncedSearch(query)}>Buscar</button>
    </section>
  )
}

export default InputSearch