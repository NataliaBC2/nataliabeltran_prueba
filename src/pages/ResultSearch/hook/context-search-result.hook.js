import React, { useEffect, useState } from 'react';

import { getResultSearchService } from '../services/getResultSearch.service';
import { useLocation } from 'wouter';

export const SearchResultInformation = (keyword) => {

  const [ location, setLocation ] = useLocation();
  const [loading, setLoading] = useState(false);

  const [resultSearch, setResultSearch] = useState(null);

  useEffect(() => {
    setLoading(true);
    getResultSearchService(keyword, 4)
      .then(data => {
        setLoading(false);
        setResultSearch(data);
      }).catch(err => {
        setLoading(false);
      setLocation(`/error`);
      });
  }, [keyword]);

  return {resultSearch, loading};
};
