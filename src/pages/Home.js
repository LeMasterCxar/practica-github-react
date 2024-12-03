import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
    <section className="home">
        <div>
            <h1>Soy César Pérez</h1>
            <p>Soy <strong>Diseñador de Interfaces y Frontend Developer</strong> especializado en HTML, CSS y Javascript.</p>
            <div className="social-links">
                <a href="https://www.facebook.com/cesar.cuchilla" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/cesarcuchilla/" target="_ blank" rel ="noopener noreferrer" >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href= "https://github.com/LeMasterCxar" target="_ blank" rel ="noopener noreferrer" >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </div>
    </section>
    );
}

export default Home;