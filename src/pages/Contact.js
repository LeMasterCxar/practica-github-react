import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
function Contact () {
    return (
        <section className="contact">
            <h2>Contáctame</h2>
            <p>Puedes contactarme a través de mi correo electrónico:</p>
            <h2>csrjavi@gmail.com</h2>
            <p>Sígueme en mis redes sociales : </p>
            <div className="social-links">
            <a href="https://www.facebook.com/cesar.cuchilla" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/cesarcuchilla/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/LeMasterCxar" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
        </section>
        );
}

export default Contact;