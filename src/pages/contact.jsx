function Contact() {
    return (
        <>
            <section id="contact" className="section contact">
                <div className="container contact-container">
                    <div className="section-heading">
                        <p>SAY HELLO</p>
                        <h2>Contact Me</h2>
                    </div>

                    <p className="contact-description">
                        I'm currently available for full-time opportunities, software development projects, and technical collaborations. Reach out and let's build something great together!
                    </p>

                    <div className="contact-links">
                        <a href="mailto:arvin.catalbas09@gmail.com" className="btn btn-primary">
                            Send Email
                        </a>
                        <a
                            href="https://github.com/arvincatalbas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/arvin-catalbas-983350437"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://facebook.com/Senemorph"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            Facebook
                        </a>
                    </div>

                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} Arvin. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Contact