// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container-content">
            <h2>Contact</h2>

            <p>Primary Email: allankevin22@gmail.com</p>
            <p>Secondary Email: okello.k.otieno@gmail.com</p>
            <p>
                LinkedIn:{' '}
                <a href="https://www.linkedin.com/in/okello-kevin/" style={{ color: '#81D8D0', textDecoration: 'underline' }}>
                    allakevin
                </a>
            </p>
            <p>
                GitHub:{' '}
                <a href="https://github.com/Aellun" style={{ color: '#81D8D0', textDecoration: 'underline' }}>
                    Aellun
                </a>
            </p>
        </div>
    );
};

export default Contact;
