import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <footer>
      
        <h2 className="footer_titulo">Alejandro</h2>
        <p className="footer_descripcion">Hi! this is my portfolio.</p>
        <div className="footer_redes">
            <a href="https://www.linkedin.com/in/alejandro-rabad%C3%A1n-rivas-78a251231" className="footer_link" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://github.com/alejandrorabadan" className="footer_link" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
        </div>
    </footer>
  )
}
