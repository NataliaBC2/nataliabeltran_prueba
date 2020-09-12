import React from 'react';
import { render } from '@testing-library/react';
import { CardComponent } from '../commons/components/Card/card.component';

test('should create', () => {
  const { urlImg, price, title, free_shipping, city } = render(<CardComponent />);
});
