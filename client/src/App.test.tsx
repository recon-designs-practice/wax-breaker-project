import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Not going to be working because I got rid of all the boilerplate stuff from CRA
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
