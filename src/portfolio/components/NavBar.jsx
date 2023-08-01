import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  
  return (
    <nav>
            <div className="nav_toggle" id="nav_toggle">
            <FontAwesomeIcon icon={faBars}/>

            </div>
            <div>
                <a href="#" className="nav_logo">Alejandro</a>
            </div>
            <div className="nav_menu" id="nav_menu">
                <div className="nav_close" id="nav_close">
                    <i className="bx bx-x"></i>
                </div>
                <ul className="nav_list">
                    <li className="nav_item"><a href="#home" className="link">Home</a></li>
                    <li className="nav_item"><a href="#about" className="link">About</a></li>
                    <li className="nav_item"><a href="#skills" className="link">Skills</a></li>
                    <li className="nav_item"><a href="#contact" className="link">Contact</a></li>

                </ul>
            </div>

        </nav>
  )
}
