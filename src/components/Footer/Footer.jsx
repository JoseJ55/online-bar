import React, { useState, useEffect } from 'react';
import './Footer.css';

import { FaInstagram, FaFacebookF, FaTwitter, FaPhone } from 'react-icons/fa';
import { FaHouseChimney } from 'react-icons/fa6';
import { BiLogoSnapchat } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

function Footer() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="footer">
      <div id="footer-top">
        <div id="footer-name">
          <img
            id="footer-logo"
            src={'/images/thirstyLOGO.png'}
            alt="company logo"
          />

          <p id="footer-name-text">
            Experience seamless dining & drinking with Thirsty
          </p>
        </div>

        <div id="footer-links">
          <p className="footer-title">Links</p>
          <div
            className="footer-link popular-tag"
            onClick={(e) => {
              let a = document.getElementById('popular');
              e.preventDefault();
              a && a.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <p className="link">Popular</p>
          </div>
          <div
            className="footer-link"
            onClick={(e) => {
              let a = document.getElementById('drinks');
              e.preventDefault();
              a && a.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <p className="link">Drinks</p>
          </div>
          <div
            className="footer-link"
            onClick={(e) => {
              let a = document.getElementById('menu-section');
              e.preventDefault();
              a && a.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <p className="link">Menu</p>
          </div>
          <div
            className="footer-link"
            onClick={(e) => {
              let a = document.getElementById('app');
              e.preventDefault();
              a && a.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <p className="link">App</p>
          </div>
          {/* <div 
                    className='footer-link'
                    onClick={e => {
                        let a = document.getElementById("about");
                        e.preventDefault();
                        a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                    }}
                >
                    <p className='link'>About</p>
                </div> */}
        </div>

        <div id="footer-contact">
          <p className="footer-title">Contact</p>
          <div className="footer-contact-info">
            <FaHouseChimney className="contact-icon" />
            <p>Los Angeles, CA</p>
          </div>
          <div className="footer-contact-info">
            <MdEmail className="contact-icon" />
            <p>info@example.com</p>
          </div>
          <div className="footer-contact-info">
            <FaPhone className="contact-icon" />
            <p>+1-234-567-8910</p>
          </div>
        </div>
      </div>

      <div id="break"></div>

      <div id="footer-bottom">
        <p>@ 2023 Copyright</p>

        <div id="footer-socials">
          <FaInstagram className="social-icon" />
          <FaFacebookF className="social-icon" />
          <BiLogoSnapchat className="social-icon" />
          <FaTwitter className="social-icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
