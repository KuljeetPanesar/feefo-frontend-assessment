import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Bar from '../Bar';
import { ThemeProvider } from 'styled-components';
import AppTheme from '../../styles/AppTheme';

describe('Bar', () => {
    const data = [
        { rating: 5, value: 10 },
        { rating: 4, value: 5 },
        { rating: 3, value: 2 },
        { rating: 2, value: 1 },
        { rating: 1, value: 3 },
    ];

    beforeEach(() => {
        render(
            <ThemeProvider theme={AppTheme}>
                <Bar data={data} />
            </ThemeProvider>
        );
    });

    it('renders 5 rows of ratings', () => {
        data.forEach(item => {
            expect(screen.getAllByText(item.rating.toString())).not.toHaveLength(0);
            expect(screen.getAllByText(item.value.toString())).not.toHaveLength(0);
        });
    });

    it('renders CustomStarReversed in each row', () => {
        const stars = screen.getAllByTitle('Grey star');
        expect(stars).toHaveLength(5);
    });

    it('sets progress max as total ratings', () => {
        const total = data.reduce((s, d) => s + d.value, 0);
        const progressBars = screen.getAllByRole('progressbar');
        progressBars.forEach((bar, i) => {
            expect(bar).toHaveAttribute('max', total.toString());
            expect(bar).toHaveAttribute('value', data[i].value.toString());
        });
    });
});