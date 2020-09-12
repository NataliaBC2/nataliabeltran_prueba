import React from 'react';
import { render } from '@testing-library/react';
import { SearchPage } from '../pages/Search/search.page';

test('should create', () => {
  const { params } = render(<SearchPage />);
});
