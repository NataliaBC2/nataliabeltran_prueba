import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

import { fetchDetailProduct } from '../services/fetchDetailProduct.service';

export const DetailProduct = (id) => {

  const [ location, setLocation ] = useLocation();
  const [resultDetail, setResultDetail] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);

    fetchDetailProduct(id)
      .then(detail => {
        setLoading(false);
        setResultDetail(detail);
      }).catch(err => {
          setLoading(false);
          setLocation(`/error`);
        });
    }, [id]);

  return {resultDetail, loading};
};
