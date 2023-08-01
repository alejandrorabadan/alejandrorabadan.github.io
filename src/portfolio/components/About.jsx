import yoImage from "../../assets/yo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
export const About = () => {
  return (
    <section className="about" id="about">
    <div>
        <p className="about_description">Hello!
My name is Alejandro, and I am a young and passionate software developer with experience in backend and frontend development. 
Currently, I am actively creating new projects using a variety of technologies, including Spring Boot, React, Laravel, etc.</p> 
        <img src={yoImage} alt="" className="yo"/>
    </div>

        <article className="about_information">
            <h3>information</h3>
            <div className="about_information_data">
               <FontAwesomeIcon icon={faUser} className="about_information-icon"/>
               <span>Alejandro Rabadán Rivas</span>
            </div>
            <div className="about_information_data">
            <FontAwesomeIcon icon={faPhone} className="about_information-icon"/>
                <span>601032574</span>
             </div>
             <div className="about_information_data">
            <FontAwesomeIcon icon={faEnvelope} className="about_information-icon"/>
                <span>alejandro.rabadan.rivas@gmail.com</span>
             </div>
        </article>
        </section>
  )
}
