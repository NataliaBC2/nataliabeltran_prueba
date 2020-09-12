import React from 'react';

import './bread-cumbs.component.scss';

export const BreadCumbsComponent = ({text}) => {
  return (
    <p className="text_breadcrumb">
      {text}
    </p>
  );
};
