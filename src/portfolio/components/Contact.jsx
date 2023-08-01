
export const Contact = () => {
  return (
    <section className="contact" id="contact">
    <article className="contact_form">
            <form action="">
            <input type="text" name="nombre" id="nombre" placeholder="Nombre"/>
            <input type="text" name="email" id="email" placeholder="E-mail"/>
            <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Message"></textarea>
            <input type="button" value="Enviar mensaje" className="button_contact"/>
            </form>
            <div className="info_personal">
        <article className="informacion_contacto">
            <h3 className="contact_subtitulo">Llámame</h3>
            <span className="contact_text">999-999-999</span>
        </article>
        <article className="informacion_contacto">
            <h3 className="contact_subtitulo">E-mail</h3>
            <span className="contact_text">alejandror.r@outlook.com</span>
        </article>
        <article className="informacion_contacto">
            <h3 className="contact_subtitulo">Localización</h3>
            <span className="contact_text">España, Córdoba</span>
        </article>
    </div>
    </article>
    </section>
  )
}
