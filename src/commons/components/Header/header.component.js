import React from 'react';
import { Link, useLocation } from 'wouter';

import './header.component.scss';

import useForm from './Hooks/header.hooks';
import logo from '../../../assets/img/logo__small.png';


export const HeaderComponent = ({initialKeyword = ''}) => {
  const [ location, setLocation ] = useLocation();
  const { keyword, changeKeyword } = useForm({initialKeyword});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({keyword});
  };

  const onSubmit = ({keyword}) => {
    keyword !== '' && setLocation(`/items?search=${keyword}`);
  };


  const handleChange = (evt) => {
    changeKeyword({keyword: evt.target.value});
  };

  return (
    <header>
      <div className="container">
        <div className="nav_header">
          <Link href="/"><img src={logo} loading="lazy" alt="Mercado Libre" className="nav_logo"/></Link>
          <div className="nav_search">
            <form onSubmit={handleSubmit}>
              <input
                className="nav_search_input"
                placeholder="Nunca dejes de buscar"
                onChange={handleChange}
                type="text"
                value={keyword}
              />
              <button className="nav_search_btn icon-search"/>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
