import skills from '../data/skills'

function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section-heading">
                    <p>MY EXPERTISE</p>
                    <h2>Skills & Technologies</h2>
                </div>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div className="skill-card" key={skill}>
                            <h3>{skill}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills