import "./Home.css";
import Encabezado from "../components/header/Encabezado.jsx";
import About from "../components/about/About.jsx";
import Projects from "../components/projects/Projects.jsx";
import Skills from "../components/skills/Skills.jsx";
import Contact from "../components/contact/Contact.jsx";
import Footer from "../components/footer/Footer.jsx";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="portfolio-container">
            <Encabezado />
            <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
                <section className="forum-cta">
                    <h2>Visista mi blog/foro</h2>
                    <p>Comenta algo</p>
                    <Link to="/forum" className="cta-button">Visitar</Link>
                </section>
            </main>
            <Footer />

        </div>
    );
}
export default Home; 
