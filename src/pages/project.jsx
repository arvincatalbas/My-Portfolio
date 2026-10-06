import projects from '../data/project'

function Projects() {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section-heading">
                    <p>MY WORK</p>
                    <h2>Featured Projects</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.id}>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="technology-list">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects