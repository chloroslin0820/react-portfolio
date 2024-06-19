import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Chloros</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/chloros_tukyintukyu" className="footer__social-link" target="_blank">
                    <i className="uil uil-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/chloros-lin-029a7627b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BeUcrxQgxRWOrOeQbP4pY%2Bg%3D%3D" className="footer__social-link linkedin" target="_blank">
                    <i className="ri-linkedin-box-fill"></i>
                </a>
                <a href="https://github.com/chloroslin0820" className="footer__social-link" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
