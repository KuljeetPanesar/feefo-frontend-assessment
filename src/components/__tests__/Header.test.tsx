import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import AppTheme from "../../styles/AppTheme";
import Header from "../Header";

describe("Header", () => {
    const renderHeader = (rating: number) =>
        render(
            <ThemeProvider theme={AppTheme}>
                <Header totalRating={rating} />
            </ThemeProvider>
        );

    it("renders correct description based on rating", () => {
        renderHeader(4.8);
        expect(
            screen.getByLabelText(/Product rated as EXCEPTIONAL by feefo/i)
        ).toBeInTheDocument();
    });

    it("renders 5 stars", () => {
        renderHeader(4.2);
        expect(screen.getAllByTitle("Filled star")).toHaveLength(5);
    });

    it("renders rating text with correct aria-label", () => {
        renderHeader(4.2);
        expect(
            screen.getByLabelText(/Product rated 4.2 out of 5 by feefo/i)
        ).toBeInTheDocument();
    });
});
