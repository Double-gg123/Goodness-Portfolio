import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /goodness gibendi/i })).toBeInTheDocument();
  expect(screen.getByText(/frontend engineer and systems architect/i)).toBeInTheDocument();
});
