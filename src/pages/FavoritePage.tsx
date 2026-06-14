import CustomHeader from "../components/CustomHeader";
import FavoriteGrid from "../components/FavoriteGrid";

const FavoritePage = () => {

  return (
    <div>
      <CustomHeader titulo="Mis Favoritos" descripcion="Aquí puedes ver tus personajes favoritos" />
      <FavoriteGrid/>
    </div>
  )
}

export default FavoritePage