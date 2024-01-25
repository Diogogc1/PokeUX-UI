import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

test('renders App', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText('Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce de acordo com a melhoria de UX.');
  expect(linkElement).toBeInTheDocument();
});
