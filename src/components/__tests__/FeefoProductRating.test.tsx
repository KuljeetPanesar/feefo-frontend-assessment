import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import AppTheme from "../../styles/AppTheme";
import FeefoProductRating from "../FeefoProductRating";

describe("FeefoProductRating", () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={AppTheme}>
                <FeefoProductRating />
            </ThemeProvider>
        );
    });

    it("renders 'Product Rating' text", () => {
        expect(screen.getByText("Product Rating")).toBeInTheDocument();
    });

    it("renders Feefo logo with correct alt text", () => {
        const logo = screen.getByAltText("Feefo logo representing product rating");
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("src", expect.stringContaining("feefoLogo.png"));
    });
});