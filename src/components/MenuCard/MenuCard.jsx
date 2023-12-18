import React from 'react';
import './MenuCard.css';

function MenuCard({ data, headerImage }) {
  const { title, desc, image, drinks } = data;

  return (
    <div className='menuCard'>
      <div className='menuCard-header' style={{ padding: headerImage ? '10% 0' : '5% 0' }}>
        {headerImage && <img className='menuCard-header-background' src={image} alt='sub header' />}
        <p className='menuCard-header-title'>{title}</p>

        <p className='menuCard-header-text'>{desc}</p>
      </div>

      <div className='menuCard-items'>
        {drinks.map((drink) => (
          <div className='menuCard-item'>
            <div className='menuCard-item-head'>
              <p>{drink.name}</p>
              <p>${drink.price}</p>
            </div>

            <p className='menuCard-item-desc'>
              {drink.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuCard;