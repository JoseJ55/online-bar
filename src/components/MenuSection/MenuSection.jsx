import React from 'react';
import './MenuSection.css';

function MenuSection() {
  const handleClick = () => {
    window.location.href = '/menu';
  };

  return (
    <div id="menu-section">
      <div id="menu-section-info">
        <div id="menu-section-info-box">
          <p>Tantalize Your Taste Buds with Our Varied Selection.</p>

          <button onClick={handleClick}>Dive Into Our Menu</button>
        </div>
      </div>

      <div id="menu-section-image">
        <img
          src="/images/alessio-zaccaria-zt0p3BYtDfM-unsplash(edited).jpg"
          alt="drink from menu"
        />
      </div>
    </div>
  );
}

export default MenuSection;
