import "./header.css"; 
const Encabezado = () => {
    return (
        <header className="header-container">
            <div className="header-content">
                <img src="/src/assets/images/fotocvcorbata.png" alt="Juan Esteban Pereira Neira" className="profile-image" />
                <div className="header-text">
                    <h1>Juan Esteban Pereira Neira</h1>
                    <p>Técnologo en Desarrollo de Software de la Universidad del Valle con proyectos realizados enfocados en el desarrollo de aplicaciones web, escritorio y para móviles.</p>
                </div>
            </div>
        </header>
    );
}

export default Encabezado;