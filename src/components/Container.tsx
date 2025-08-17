import React from "react";
import Bar from "./Bar";
import FeefoProductRating from "./FeefoProductRating";
import Header from "./Header";
import { StyledContainer } from "../styles/StyledContainer";

export default function Container() {

    const ratingsData = [
        { rating: 5, value: 952 },
        { rating: 4, value: 171 },
        { rating: 3, value: 55 },
        { rating: 2, value: 14 },
        { rating: 1, value: 40 },
    ];

    const totalRating = 4.6;

    return (
        <StyledContainer>
            <Header totalRating={totalRating} />
            <FeefoProductRating />
            <Bar data={ratingsData} />
        </StyledContainer>

    );
};
