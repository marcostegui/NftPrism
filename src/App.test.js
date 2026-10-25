// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NftPrism title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NftPrism/i);
    expect(titleElement).toBeInTheDocument();
});
