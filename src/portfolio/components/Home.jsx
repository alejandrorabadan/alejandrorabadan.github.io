import yoImage from "../../assets/yo.jpg";
export const Home = () => {
  return (
    <section className="home" id="home">
    <img src={yoImage} alt="" />
        <h1 className="home_title">Alejandro Rabadán Rivas</h1>
        <p className="home_profession">Web Developer</p>
        <div className="redes-sociales">
        </div>  
      <a href="#" className="button_download">Download CV</a>
    </section>
  )
}
