import { queryByTestId, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(queryByTestId("this-does-not-exist")).not.toBeInTheDocument();
});
