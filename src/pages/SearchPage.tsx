import { useEffect } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { useHistory } from '../hooks/useHistory';
import CustomHeader from '../components/CustomHeader';
import TagHistory from '../components/TagHistory';
import CharacterGrid from '../components/CharacterGrid';
import InputSearch from '../components/InputSearch';
import CustomFooter from '../components/CustomFooter';


const SearchPage = () => {

    const { characters, fetchCharacters } = useCharacters();
    const {busquedasPrevias, addToHistory} = useHistory(["Rick", "Morty"]);
  
    const handleSearch = async (query:string) => {
      addToHistory(query);
      fetchCharacters(query);
    }
  
    useEffect(()=>{
      if(busquedasPrevias.length > 0){
        fetchCharacters(busquedasPrevias[0]);
      }
    }, [])
  
  return (
    <div>
      <CustomHeader titulo="Rick and Morty APP" descripcion="Encuentra tus personajes favoritos" />
      <InputSearch onSearch={handleSearch}/>
      <TagHistory busquedasPrevias={busquedasPrevias} onTagClick={fetchCharacters} />
      <CharacterGrid characters={characters} />
      <CustomFooter msjFooter="Todos los derechos reservados. Nicolás Ezequiel González." />

    </div>
  )
}

export default SearchPage