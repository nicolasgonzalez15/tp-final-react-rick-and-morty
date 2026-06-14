interface FooterProps {
    msjFooter: string
}   

const CustomFooter = ({msjFooter}:FooterProps) => {


    const ahora = new Date();
    const anioActual = ahora.getFullYear();  
       
    return(
        
        <footer className="footer"> 
        <p>Copyright {anioActual}©. {msjFooter} </p>
        </footer>
  )
}

export default CustomFooter