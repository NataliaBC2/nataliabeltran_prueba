import React from 'react';

import { API_URL } from '../../../commons/settings';
import { setCurrencyValue } from '../../../commons/utils/currency-type.utils';


const responseSearch = resultSearch => {

  const categories = resultSearch.filters.find(data => data.id === 'category');
  const categoriesValue = !!categories && categories.values.length > 0 ? categories.values[0].path_from_root.map(value => value.name) : [];

  return {
    author: {
      name: resultSearch.query,
      lastname: resultSearch.query,
    },
    categories: categoriesValue,
    items: resultSearch.results.map(
      infoItem => (
        {
          id: infoItem.id,
          title: infoItem.title,
          price: {
            currency: infoItem.currency_id,
            amount: setCurrencyValue(infoItem.price),
            decimals: infoItem.price,
          },
          picture: infoItem.thumbnail,
          condition: infoItem.condition,
          free_shipping: infoItem.shipping.free_shipping,
          city: infoItem.address.state_name
        }
      )
    )
  };
};

export const getResultSearchService = (keyword, limit = 4) => {
  const apiURL = `${API_URL}sites/MLA/search?q=/${keyword}&limit=${limit}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(responseSearch);
};
