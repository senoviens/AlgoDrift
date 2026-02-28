// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AlgoDrift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AlgoDrift/i);
    expect(titleElement).toBeInTheDocument();
});
