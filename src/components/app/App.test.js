import React from 'react';
import { render } from '@testing-library/react';
import AppComponent from './App';

test('renders learn react link', () => {
  const { getByText } = render(<AppComponent />);
});
