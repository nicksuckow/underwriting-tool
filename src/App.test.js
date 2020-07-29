import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders application', () => {
  const { getByLabelText } = render(<App />);
  const stateSelector = getByLabelText(/States/i);
  const criteriaSelector = getByLabelText(/Criteria/i);
  expect(stateSelector).toBeInTheDocument();
  expect(criteriaSelector).toBeInTheDocument();
});
