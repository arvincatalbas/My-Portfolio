import skills from '../data/skills'

function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section-heading">
                    <p>MY EXPERTISE</p>
                    <h2>Skills & Technologies</h2>
                    <p className="section-description">
                        Technologies and skills I use
                        in software development and IT.
                    </p>
                </div>

                <div className="skills-categories">
                    {skills.map((group, index) => (
                        <article
                            className="skill-category"
                            key={group.category}
                        >
                            <div className="skill-category-heading">
                                <span className="skill-category-number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3>{group.category}</h3>
                                <span className="skill-count">
                                    {group.technologies.length} skills
                                </span>
                            </div>

                            <ul className="skills-grid">
                                {group.technologies.map((skill) => (
                                    <li className="skill-card" key={skill}>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills