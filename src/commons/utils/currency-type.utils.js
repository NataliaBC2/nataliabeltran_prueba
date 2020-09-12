import React from 'react';
import NumberFormat from 'react-number-format';

export const setCurrencyValue = (num) => {
  return <NumberFormat
    value={num}
    displayType={'text'}
    thousandSeparator={'.'}
    decimalSeparator={','}
    prefix={'$ '}
    decimalScale={0}
  />
};
