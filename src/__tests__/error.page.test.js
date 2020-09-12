import React from 'react';
import { render } from '@testing-library/react';
import ErrorPage from '../pages/ErrorPage/error.page';

test('should create', () => {
  const { getByText } = render(<ErrorPage />);
});
