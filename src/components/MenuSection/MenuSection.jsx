import { motion, useElementScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import './MenuSection.css';

function MenuSection() {
  const handleClick = () => {
    window.location.href = '/menu';
  };

  const ref = useRef(null);

  const { scrollYProgress } = useElementScroll(ref);
  const y = useTransform(scrollYProgress, [0, 1], [-0.5, 0.5]);

  return (
    <div id="menu-section" ref={ref}>
      <div id="menu-section-info">
        <div id="menu-section-info-box">
          <p id="menu-section-info-title">Tantalize Your Taste Buds</p>

          <p id="menu-section-info-subtitle">
            Explore our tantalizing menu offerings and discover a world of taste
            sensations. From handcrafted cocktails to savory appetizers and
            mouthwatering entrees, there&apos;s something for everyone. Ready
            for a culinary adventure? Dive into our full menu below.
          </p>

          <button onClick={handleClick}>Dive Into Our Menu</button>
        </div>
      </div>

      <div id="menu-section-image">
        <motion.div className="menu-section-img" id="menu-image-first">
          <motion.div className="menu-section-img-contain" style={{ y: y }}>
            <img
              src="/images/alessio-zaccaria-zt0p3BYtDfM-unsplash(edited).jpg"
              alt="drink from menu"
            />
          </motion.div>
        </motion.div>

        <motion.div className="menu-section-img" id="menu-image-middle">
          <motion.div className="menu-section-img-contain" style={{ y: y }}>
            <img
              src="/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
              alt="drink from menu"
            />
          </motion.div>
        </motion.div>

        <motion.div className="menu-section-img" id="menu-image-last">
          <motion.div className="menu-section-img-contain" style={{ y: y }}>
            <img
              src="/images/patrick-schneider-5xltWMpkN3E-unsplash.jpg"
              alt="drink from menu"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default MenuSection;
