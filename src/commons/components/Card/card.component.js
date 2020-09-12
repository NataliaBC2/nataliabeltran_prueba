import React from 'react';

import './card.component.scss';
import imgDos from '../../../assets/img/ico-delivery.png';

export const CardComponent = ({urlImg, price, title, free_shipping, city}) => {
  return (
    <div className="card">
      <div className="wrapper_image">
        <img src={urlImg} alt={title}/>
      </div>
      <div className="wrapper_content">

          <p className="text_price">
            {price}
            {free_shipping ? <img src={imgDos} alt="Envio gratis" loading="lazy" className="icon-delivery"/>: ''}
          </p>
          <p className="tag"> {city}  </p>
          <h3 className="title_card">
            {title}
          </h3>
      </div>
    </div>
  );
};
