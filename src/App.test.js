import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

test('hero leads with the name in the nav and a clear headline', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /i build the interface/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /illustration of goodness/i })).toBeInTheDocument();
});

test('case studies come first and show problem, build and result', () => {
  render(<App />);
  const work = screen.getByRole('region', { name: /case studies/i });
  expect(within(work).getAllByText('Problem').length).toBe(3);
  expect(within(work).getAllByText('Result').length).toBe(3);
});

test('more projects are revealed on request', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /show 4 more projects/i });
  expect(button).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(button);
  expect(screen.getByRole('button', { name: /show fewer projects/i })).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getAllByText('Problem').length).toBe(7);
});

test('full stack list is hidden until asked for', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /show the full stack/i });
  expect(document.getElementById('full-stack')).not.toBeVisible();
  fireEvent.click(button);
  expect(document.getElementById('full-stack')).toBeVisible();
});
