import { Link, useNavigate, useParams } from "react-router";
import { useCharacterDetails } from "../hooks/useCharacterDetails";
import { NotFound } from "./NotFound";


export const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const idNumber = Number(id);

  const { character, loading, error } = useCharacterDetails(idNumber);

   console.log("CharacterDetails - character:", character);

  if (loading) {
    return (
      <div className="state-container">
        <p>Cargando detalles del personaje...</p>
      </div>
    );
  }

  if (error || !character) {
    return (
      <>
        <NotFound codError="404" tituloError="Personaje no encontrado" msjError="No se pudo encontrar el personaje solicitado." />
      </>
  )}

  return (
    <div className="page">
      <button className="btn-return" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="detail-layout">
        <Link to={`${character.image}`} target="_blank" rel="noopener noreferrer">
        <div className="detail-cover">
          {character?.image ? (
            <img src={character.image} alt={character.name} />
          ) : (
            <div className="cover-placeholder">
              <span>{character?.name ? character.name.charAt(0) : "?"}</span>
            </div>
          )}
        </div>
        </Link>

        <div className="detail-info">
          <h2 className="detail-title">Detalles del Personaje</h2>

          <div className="detail-section">
            <h4>Nombre</h4>
            <div className="detail-dimensions">
              <p>
                {character?.name ?? "?"}
              </p>
            </div>
          </div>

          <div className="detail-section">
            <h4>Especie x Género</h4>
            <div className="detail-dimensions">
              <p>
                {character?.species ?? "?"} x {character?.gender ?? "?"}
              </p>
            </div>
          </div>
        <div className="detail-section">
            <h4>Ubicación</h4>
            <div className="detail-dimensions">
              <p>
                {character?.location ?? "?"}
              </p>
            </div>
          </div>
        <div className="detail-section">
            <h4>Estado</h4>
            <div className="detail-dimensions">
              <p>
                {character?.status ?? "?"}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
