import "./About.css";

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2>Sobre mí</h2>
                <div className="about-content">
                    <p>
                        Soy Tecnólogo en Desarrollo de Software de la Universidad del Valle, apasionado por el desarrollo de aplicaciones y la seguridad informática. Me gusta aprender nuevas tecnologías y mejorar mis habilidades constantemente.
                    </p>
                    <p>
                        Cuento con experiencia ocupacional en el desarrollo de aplicaciones de escritorio, web y móviles. He trabajado en proyectos de desarrollo de software con distintas tecnologías como JavaScript, Java, Python, PHP, C++, entre otros. Me gusta trabajar en equipo y colaborar con otros desarrolladores.
                    </p>
                </div>
                <div className="about-image">
                    <img
                        src="/assets/mi-foto.jpg"
                        alt="Juan Esteban estudiando y desarrollando"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;