import { motion, useDragControls } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import './style.css';

import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BiLogoSnapchat } from 'react-icons/bi';

import VideoCarosel from './Components/VideoCarosel/VideoCarosel';

function Header() {
  const parentRef = useRef(null);

  const handleMouseDown = (event) => {
    event.stopPropagation();
  };

  return (
    <div id="header">
      <VideoCarosel />

      <div id="header-shadow"></div>

      <motion.div id="header-info-container" ref={parentRef}>
        <motion.div
          id="header-info-container-details"
          dragConstraints={parentRef}
          drag
          dragMomentum={false}
        >
          <p id="header-info-title" onMouseDown={handleMouseDown}>
            Experience Seamless Dining & Drinking
          </p>

          <p id="header-info-sub-title" onMouseDown={handleMouseDown}>
            More than just a place to grab a drink, we&apos;re a destination for
            unforgettable experiences.
          </p>

          <div id="header-social">
            <FaInstagram
              className="header-social-icon"
              onMouseDown={handleMouseDown}
            />
            <FaFacebookF
              className="header-social-icon"
              onMouseDown={handleMouseDown}
            />
            <BiLogoSnapchat
              className="header-social-icon"
              onMouseDown={handleMouseDown}
            />
            <FaTwitter
              className="header-social-icon"
              onMouseDown={handleMouseDown}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Header;
