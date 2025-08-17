import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Container from '../Container';
import { ThemeProvider } from 'styled-components';
import AppTheme from '../../styles/AppTheme';

describe("Container", () => {
  it("renders Header, FeefoProductRating and Bar", () => {
    render(
      <ThemeProvider theme={AppTheme}>
        <Container />
      </ThemeProvider>
    );

    expect(screen.getByText(/OUT OF 5/i)).toBeInTheDocument();
    expect(screen.getByText(/Product Rating/i)).toBeInTheDocument();
    const progressBars = screen.getAllByRole("progressbar");
    expect(progressBars).toHaveLength(5);
  });
});