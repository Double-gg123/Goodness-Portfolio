import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /goodness gibendi/i })).toBeInTheDocument();
  expect(screen.getByText(/frontend engineer and systems architect/i)).toBeInTheDocument();
});

test('looping hero animation can be paused (WCAG 2.2.2)', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /pause animations/i });
  fireEvent.click(button);
  expect(screen.getByRole('button', { name: /play animations/i })).toHaveAttribute('aria-pressed', 'true');
});

test('projects show problem, build and result', () => {
  render(<App />);
  expect(screen.getAllByText('Problem').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Result').length).toBeGreaterThan(0);
});
