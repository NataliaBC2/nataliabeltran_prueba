import React from 'react';
import { render } from '@testing-library/react';
import { BreadCumbsComponent } from '../commons/components/BreadCumbs/bread-cumbs.component';

test('should create', () => {
  const { text } = render(<BreadCumbsComponent />);
});
