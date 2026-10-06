import { stats, highlights } from '../data/about'

function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section-heading">
                    <p>ABOUT ME</p>
                    <h2>Who I Am & What I Do</h2>
                </div>

                {/* Main Featured Bio Box */}
                <div className="about-main-card">
                    <div className="about-bio">
                        <span className="about-badge">Information Technology Fresh Graduate</span>
                        <h3>Driven by Curiosity, Fueled by Technology</h3>
                        <p>
                            I am an Bachelor of Science in Information Technology Fresh Graduate
                            with a deep interest in Software Engineering, Network Engineering,
                            IT Support Specialist.
                        </p>
                        <p>
                            My objective is to continually enhance my technical toolkit
                            and gain valuable hands-on experience in network administration,
                            web development, and system management.
                        </p>
                    </div>

                    <div className="about-stats-grid">
                        {stats.map((item, index) => (
                            <div className="stat-card" key={index}>
                                <span className="stat-label">{item.label}</span>
                                <span className="stat-value">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pillars Grid Header */}
                <div className="about-pillars-heading">
                    <h3>Core Focus Areas</h3>
                </div>

                {/* 4 Pillars Grid */}
                <div className="about-grid">
                    {highlights.map((pillar, index) => (
                        <div className="about-card" key={index}>
                            <div className="about-icon-wrapper">
                                {pillar.icon}
                            </div>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About