import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: '#',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/a-lamloum',
      label: 'GitHub'
    },
    {
      icon: <SiLeetcode />,
      url: '#',
      label: 'LeetCode'
    }
  ];

  return (
    <footer>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo">
            <h3>Ahmad Lamloum</h3>
            <small>Web Developer</small>
          </div>

          <nav className="footer__nav">
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>&copy; {currentYear} Ahmad Lamloum</p>
          </div>
          <div className="footer__location">
            <p>Saarbrücken, Germany</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
