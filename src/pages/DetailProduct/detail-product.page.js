import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './detail-product.page.scss';

import { BreadCumbsComponent } from '../../commons/components/BreadCumbs/bread-cumbs.component';
import { DetailProduct } from './hook/context-detail-product.hook';
import { Loader } from '../../commons/components/Loader/loader.component';

export const DetailProductPage = ({params}) => {

  const {resultDetail, loading} = DetailProduct(params.id);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    )
  }

  return !!resultDetail && (
    <div className="container">
      <HelmetProvider>
        <Helmet>
          <title>Mercado libre - {resultDetail.item.title}</title>
          <meta name="description" content={resultDetail.item.description.slice(0, 200)}/>
          <meta name="rating" content="General" />
        </Helmet>
      </HelmetProvider>
      <section>
        <ul className="navigation_breadcrumb">
          {
            resultDetail.categories.map(category =>
              <li key={category}>
                <BreadCumbsComponent
                  text={category}
                />
              </li>
            )
          }
        </ul>
      </section>

      <section className="layaout_main_white_internal">
        <div className="result_wrapper">
          <div className="card_result">
            <div className="image_result">
              <img src={resultDetail.item.picture} loading="lazy" alt={resultDetail.item.title}/>
            </div>
            <div className="card_information_price">
              <span className="tag_detail">{resultDetail.item.condition} </span>
              <h2 className="title_card_detail">
                {resultDetail.item.title}
              </h2>


                <p className="tag_price">{ resultDetail.item.price.amount }</p>

                <a href={resultDetail.item.link} className="card_result_btn">Comprar</a>
            </div>
          </div>
          <div className="card_information_detail">
            <h2 className="title_detail">Descripción del producto </h2>
            <p className="description_detail">
              {resultDetail.item.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
