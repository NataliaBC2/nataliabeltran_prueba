import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const SearchPage = ({params}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Mercado libre</title>
        <meta name="description" content=""/>
        <meta name="rating" content="General"/>
      </Helmet>
    </HelmetProvider>
  );
};
