import React from "react";
import styled from "styled-components";
import feefoLogo from "../images/feefoLogo.png"

const RatingWrapper = styled.div`
  display: flex;
  justify-content: center; // centers the whole component horizontally
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  margin-top: 0.5rem;
`;

const RatingText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const Logo = styled.img`
  height: auto;
  max-height: 40px;
  width: auto;
  max-width: 120px;
  object-fit: contain;

  @media (max-width: 600px) {
    max-width: 80px;
    max-height: 30px;
  }
`;

export default function FeefoProductRating() {
  return (
    <RatingWrapper>
      <RatingText>Product Rating</RatingText>
      <Logo src={feefoLogo} alt="Feefo logo representing product rating" />
    </RatingWrapper>
  );
};