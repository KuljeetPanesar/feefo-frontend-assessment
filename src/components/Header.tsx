import React from "react";
import styled from "styled-components";
import CustomStar from "../icons/CustomStar";

interface HeaderProps {
  totalRating: number;
}

function getRatingDescription(score: number): string {
  if (score >= 4.7 && score <= 5) return "EXCEPTIONAL";
  if (score >= 4 && score < 4.7) return "EXCELLENT";
  if (score >= 3 && score < 4) return "GOOD";
  if (score >= 2 && score < 3) return "POOR";
  if (score >= 0 && score < 2) return "VERY POOR";
  return "Invalid Rating";
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.heading};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.25rem;
  margin-bottom: 0.5rem;
`;

const StarsRow = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const RatingText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.1rem;
  margin: 0;
`;

export default function Header({ totalRating }: HeaderProps) {
  const description = getRatingDescription(totalRating);

  const stars = Array.from({ length: 5 }, (_, i) => {
    const fill = Math.min(Math.max(totalRating - i, 0), 1); // value between 0 and 1
    return <CustomStar key={i} fill={fill} />; // fill stars as rating percentage
  });

  return (
    <HeaderWrapper>
      <Description aria-label={`Product rated as ${description} by feefo`}>{description}</Description>
      <StarsRow>{stars}</StarsRow>
      <RatingText aria-label={`Product rated ${totalRating} out of 5 by feefo`}>{totalRating} OUT OF 5</RatingText>
    </HeaderWrapper>
  );
};