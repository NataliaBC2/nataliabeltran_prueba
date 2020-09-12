import React from 'react';

import loaderImg from '../../../assets/img/loader.svg';
import './loaders.component.scss'

export const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderImg} alt="Cargando ..."/>
    </div>
  );
};
