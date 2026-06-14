interface HeaderProps {
    titulo: string,
    descripcion: string
}


const CustomHeader = ({titulo, descripcion}: HeaderProps) => {
  return (
    <header>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </header>
  )
}

export default CustomHeader