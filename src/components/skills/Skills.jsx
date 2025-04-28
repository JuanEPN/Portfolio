import "./Skills.css";

const Skills = () => {
    const skills = [
        { name: 'JavaScript', level: 'Medio' },
        { name: 'Python', level: 'Alto' },
        { name: 'Kotlin', level: 'Bajo' },
    ];

    return (
        <section className="skills-section">
            <h2>Mis Habilidades</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <div className="skill-info">
                            <span>{skill.name}</span>
                            <span>{skill.level}</span>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-progress"
                                style={{ width: `${skill.level}` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    ); 
}

export default Skills; 