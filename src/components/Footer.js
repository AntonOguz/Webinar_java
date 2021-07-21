import React from 'react';
import style from '../css_modules/footer.module.css'

const Footer = () => {
    return (
        <footer className="rounded-bottom">
            <div className="border border-light rounded-pill btn btn-danger button">Send me an
                <span className={`${style.email} text-uppercase`}> email</span></div>
        </footer>
    );
};

export default Footer;
