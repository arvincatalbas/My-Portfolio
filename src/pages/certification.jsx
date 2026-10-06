import { useState } from 'react'
import certifications from '../data/certifications'

function Certifications() {
    const [selectedCertificate, setSelectedCertificate] = useState(null)

    const openModal = (certificate) => {
        setSelectedCertificate(certificate)
    }

    const closeModal = () => {
        setSelectedCertificate(null)
    }

    return (
        <section id="certifications" className="section certifications">
            <div className="container">
                <div className="section-heading">
                    <p>MY ACHIEVEMENTS</p>
                    <h2>Certifications</h2>
                </div>

                <div className="certifications-grid">

                    {certifications.map((certificate) => (
                        <article
                            className="certification-card"
                            key={certificate.title}
                        >
                            {/* Certificate Image */}
                            {certificate.image && (
                                <div
                                    className="certificate-image"
                                    onClick={() => openModal(certificate)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img
                                        src={certificate.image}
                                        alt={certificate.title}
                                    />
                                </div>
                            )}

                            {/* Certificate Information */}
                            <div className="certification-content">
                                <h3>{certificate.title}</h3>

                                <p>{certificate.issuer}</p>

                                <span>{certificate.year}</span>
                            </div>

                        </article>
                    ))}
                </div>

            </div>

            {/* Certificate Modal */}
            {selectedCertificate && (
                <div className="certificate-modal-overlay" onClick={closeModal}>
                    <div
                        className="certificate-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="certificate-modal-close"
                            onClick={closeModal}
                            aria-label="close certificate view"
                        >
                            ×
                        </button>

                        <img
                            src={selectedCertificate.image}
                            alt={selectedCertificate.title}
                            className="certificate-modal-image"
                        />

                        <div className="certificate-modal-info">
                            <h3>{selectedCertificate.title}</h3>
                            <p>{selectedCertificate.issuer}</p>
                            <span>{selectedCertificate.year}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Certifications