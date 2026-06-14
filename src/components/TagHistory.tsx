interface TagHistoryProps {
    busquedasPrevias: string[],
    onTagClick: (query: string) => void
}


const TagHistory = ({busquedasPrevias,onTagClick}:TagHistoryProps) => {
  return (
    <section className="history-container">
        <h2>Búsquedas Previas</h2>
        <ul className="history-tags">
            {busquedasPrevias.map((busquedaPrevia) => {
                return <li key={busquedaPrevia} className="tag" onClick={() => onTagClick(busquedaPrevia)}>{busquedaPrevia}</li>
            })}
        </ul>
    </section>
  )
}

export default TagHistory