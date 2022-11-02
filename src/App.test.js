import { render, screen } from '@testing-library/react';
import { Calendar } from 'react-calendar';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  const linkElement = screen.getByText(/Friendlendar/i);
  expect(linkElement).toBeInTheDocument();
});
