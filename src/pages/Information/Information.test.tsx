/* eslint-disable */
import { render, waitFor, screen } from '@testing-library/react';
import PersonInfo from './Information';

describe('TimeNow Component', () => {
  it('renders current time correctly', async () => {
    render(<PersonInfo />);
    const time = screen.getByText((content, node:any) => {
      return node.tagName.toLowerCase() === 'h1' && /\d{2}:\d{2}:\d{2}/.test(content);
    });
    const heading = screen.getByText((content, node:any) => {
        return node.tagName.toLowerCase() === 'h1' && /Время/.test(content);
      });
      await waitFor(() => {
        expect(heading).toBeInTheDocument();
      });
      

    await waitFor(() => {
      expect(time).toBeInTheDocument();
    });
  });
});