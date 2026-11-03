import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

test('hero has a clear headline and names Goodness beside her portrait', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /i build the interface/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /illustration of goodness gibendi/i })).toBeInTheDocument();
  expect(screen.getByText('Frontend developer · Thika, Kenya')).toBeInTheDocument();
});

test('case studies come first, with results and problem / build / outcome rows', () => {
  render(<App />);
  const work = screen.getByRole('region', { name: /case studies/i });
  expect(within(work).getAllByText('4×').length).toBeGreaterThan(0);
  expect(within(work).getAllByText('Problem').length).toBe(4);
  expect(within(work).getAllByText('Result').length).toBe(2);
  expect(within(work).getAllByText('Shipped').length).toBe(2);
});

test('more projects are revealed on request', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /show 3 more projects/i });
  expect(button).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(button);
  expect(screen.getByRole('button', { name: /show fewer projects/i })).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getAllByText('Problem').length).toBe(7);
});

test('every role says what type of role it is', () => {
  render(<App />);
  const experience = screen.getByRole('region', { name: /experience/i });
  expect(within(experience).getAllByText('Full-time').length).toBe(2);
  expect(within(experience).getAllByText('Part-time').length).toBe(2);
});

test('full stack list is hidden until asked for', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /show the full stack/i });
  expect(document.getElementById('full-stack')).not.toBeVisible();
  fireEvent.click(button);
  expect(document.getElementById('full-stack')).toBeVisible();
});

test('tool labels around the portrait show where each tool was used, and Escape closes it', () => {
  render(<App />);
  const mpesa = screen.getByRole('button', { name: /m-pesa: show projects/i });
  expect(mpesa).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(mpesa);
  expect(mpesa).toHaveAttribute('aria-expanded', 'true');
  const panel = document.getElementById('tool-projects');
  expect(within(panel).getByRole('link', { name: /digital chama/i })).toHaveAttribute('href', '#case-digital-chama');
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(mpesa).toHaveAttribute('aria-expanded', 'false');
});

test('links to a collapsed case study open the list instead of going nowhere', () => {
  render(<App />);
  expect(document.getElementById('case-lumen-ra')).toBeNull();
  const link = document.createElement('a');
  link.href = '#case-lumen-ra';
  document.body.appendChild(link);
  fireEvent.click(link);
  expect(document.getElementById('case-lumen-ra')).not.toBeNull();
});

test('each case study explains the people side of the build', () => {
  render(<App />);
  expect(screen.getAllByText('Why it works').length).toBe(4);
});

test('flow diagrams can be replayed', () => {
  render(<App />);
  expect(screen.getAllByRole('button', { name: /replay/i }).length).toBeGreaterThan(0);
});
