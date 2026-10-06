import heroImage from '../assets/Arvin.png'
import cvDownload from '../assets/resume/Arvin_Catalbas.pdf'

function Home() {
    return (
        <header id="home">

            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="container nav-container">
                    <a href="#home" className="logo">
                        Arvin's <span>Portfolio</span>
                    </a>

                    <div className="nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#certifications">Certifications</a>
                        <a href="#contact">Contact</a>
                    </div>
                    
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <p className="hero-subtitle">WELCOME TO MY PORTFOLIO</p>
                        <h1>
                            Hi, I'm <span>Arvin Catalbas</span>
                        </h1>
                        <h2>IT Fresh Graduate & Aspiring Web Developer & Network Engineer</h2>
                        <p className="hero-description">
                            I practice web applications, explore modern technologies,
                            and develop practical IT solutions using programming,
                            networking, and database technologies.
                        </p>
                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary">
                                View Projects
                            </a>
                            <a href="#contact" className="btn btn-secondary">
                                Contact Me
                            </a>
                        </div>
                        <div className="cv-buttons">
                            <a href={cvDownload} className="btn btn-cv" download>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 3v12" />
                                    <path d="M7 10l5 5 5-5" />
                                    <path d="M4 20h16" />
                                </svg>
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="hero-profile">
                        <div className="profile-container">
                            <img
                                src={heroImage}
                                alt="Arvin's Profile"
                                className="profile-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </header>
    )
}

export default Home