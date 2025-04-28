import { useState, useEffect } from "react";
import "./Projects.css"; 

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/JuanEPN/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <section className="projects-section">
            <h2>Mis Proyectos</h2>
            <div className="projects-grid"> 
                {repos.map(repo => (
                    <div className="project-card" key={repo.id}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
                    </div>
                ))}  
            </div>
        </section>
    );
}

export default Projects;