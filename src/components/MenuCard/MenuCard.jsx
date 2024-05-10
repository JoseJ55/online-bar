import React, { useEffect, useState, useRef } from 'react';
import './MenuCard.css';

function MenuCard({ data, headerImage }) {
  const { title, desc, image, drinks } = data;

  const [scrollPosition, setScrollPosition] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const currentPosition = window.scrollY;
        const currentBottom = currentPosition + window.innerHeight;
        const imageTop = imageRef.current.getBoundingClientRect().top;
        const imageBottom = imageRef.current.getBoundingClientRect().bottom;

        const isImageInView =
          currentBottom > imageTop && currentPosition < imageBottom;

        if (isImageInView) {
          const percentage =
            (Math.min(currentBottom, imageBottom) -
              Math.max(currentPosition, imageTop)) /
            (imageBottom - imageTop);

          const clampedPercentage = Math.max(0, Math.min(percentage, 1));

          setScrollPosition(clampedPercentage);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imageRef, data, headerImage]);

  return (
    <div className="menuCard">
      <div
        className="menuCard-header"
        id={
          title === 'Cocktails'
            ? 'cocktails'
            : title === 'Savory Delights'
              ? 'food'
              : ''
        }
        style={{ padding: headerImage ? '10% 0' : '5% 0' }}
      >
        {headerImage && (
          <img
            className="menuCard-header-background"
            ref={imageRef}
            src={image}
            alt="sub header"
            style={{ transform: `translateY(-${scrollPosition * 50}%)` }}
          />
        )}

        <p className="menuCard-header-title">{title}</p>
        <p className="menuCard-header-text">{desc}</p>
      </div>

      <div className="menuCard-items">
        {drinks.map((drink, index) => (
          <div key={index} className="menuCard-item">
            <div className="menuCard-item-head">
              <p>{drink.name}</p>
              <p>${drink.price}</p>
            </div>

            <p className="menuCard-item-desc">{drink.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuCard;
