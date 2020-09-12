import React from 'react';
import { render } from '@testing-library/react';
import { HeaderComponent } from '../commons/components/Header/header.component';

test('should create', () => {
  const { initialKeyword } = render(<HeaderComponent />);
});
