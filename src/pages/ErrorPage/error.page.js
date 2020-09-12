import React  from 'react';
import { Link } from 'wouter';

import icoMonitor from '../../assets/img/monitor.svg';

import './error.page.scss';

export default function ErrorPage() {
  return (
    <>
      <div className="page_error">
        <img src={icoMonitor} alt="No se encontro ruta"/>
        <p className="title_error">No fue posible encontrar lo que buscabas</p>
        <Link to={"/"} className="link_error"> Ir a la página principal </Link>
      </div>
    </>
  );
}
