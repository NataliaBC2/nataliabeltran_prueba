import React from 'react';
import { Link } from 'wouter';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSearchParam } from 'react-use';

import { CardComponent } from '../../commons/components/Card/card.component';
import { BreadCumbsComponent } from '../../commons/components/BreadCumbs/bread-cumbs.component';
import { SearchResultInformation } from './hook/context-search-result.hook';
import { Loader } from '../../commons/components/Loader/loader.component';

export const ResultSearchPage = () => {
  const params = useSearchParam('search') || '';

  const {resultSearch, loading} = SearchResultInformation(params);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    )
  }

  return !!resultSearch && (
    <main>
      <HelmetProvider>
        <Helmet>
          <title>Mercado libre - {params}</title>
          <meta name="description" content={params}/>
          <meta name="rating" content="General" />
        </Helmet>
      </HelmetProvider>
      <div className="container">
        <section>
          <ul className="navigation_breadcrumb">
            {
              resultSearch.categories.map(category =>
                <li key={category}>
                  <BreadCumbsComponent
                    text={category}
                  />
                </li>
              )
            }
          </ul>
        </section>
        <section className="layaout_main_white">
          <ul className="result_wrapper">
            {
              resultSearch.items.map(info =>
                <Link href={`/items/${info.id}`} key={info.id}>
                  <li>
                    <CardComponent
                      urlImg={info.picture}
                      price={info.price.amount}
                      title={info.title}
                      url={info.url}
                      free_shipping={info.free_shipping}
                      city={info.city}
                    />
                  </li>
                </Link>
              )
            }
          </ul>
        </section>
      </div>
    </main>
  );
};
