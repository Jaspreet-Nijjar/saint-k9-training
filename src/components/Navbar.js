import { useState } from 'react';
import navbar from '../styles/navbar.css';
import Logo from '../images/big-logo.png';
import { NavLink } from 'react-router-dom';
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
} from 'react-icons/fa';

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  const changeImage = () => {
    if (window.scrollY >= 0) {
      setScroll(true);
    } else if (window.scrollY >= 40) {
      setStickyNav(true);
    }
  };

  window.addEventListener('scroll', changeImage);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={`container`}>
        <div className="icons">
          <FaWhatsapp size={45} className="icon whatsapp" />
          <FaEnvelope size={30} className="icon" />
          <FaPhone size={30} className="icon phone" />
          <FaFacebook size={30} className="icon" />
          <FaInstagram size={30} className="icon" />
        </div>

        <div className={`main-logo img ${scroll && 'active'}`}>
          <img src={Logo} alt="saint k9 training logo" onClick={handleClick} />
        </div>

        <nav className="nav">
          <NavLink
            to="/services"
            onClick={() => {
              let services = document.getElementById('services');
              services && services.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Services
          </NavLink>
          <NavLink
            to="/reviews"
            onClick={() => {
              let reviews = document.getElementById('reviews');
              reviews && reviews.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Reviews
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => {
              let about = document.getElementById('about');
              about && about.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/FAQs"
            onClick={() => {
              let faq = document.getElementById('faq');
              faq && faq.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            FAQs
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => {
              let contact = document.getElementById('contact');
              contact && contact.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
};
