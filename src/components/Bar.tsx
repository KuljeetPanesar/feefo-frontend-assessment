import React from "react";
import styled from "styled-components";
import { StyledProgress } from "../styles/StyledProgress";
import CustomStarReversed from "../icons/CustomStarReversed";

interface BarProps {
  data: {
    rating: number;
    value: number;
  }[];
}

const BarContainer = styled.div`
  margin-top: 3rem;
  padding: 1rem 0.5rem;
`;

const BarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.5rem;
`;

const RatingLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  min-width: 2rem;
  text-align: right;

`;

const RatingValue = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  min-width: 2rem;
  text-align: left;
`;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProgressWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export default function Bar({ data }: BarProps) {

  // Calculate total number of ratings
  const total = data.reduce((sum, values) => sum + values.value, 0);

  return (
    <BarContainer>
      {data.map(rates => (
        <BarRow aria-label={`${rates.value} ${rates.value} star ratings by feefo`} key={rates.rating}>
          <RatingLabel>{rates.rating}</RatingLabel>
          <StarWrapper>
            <CustomStarReversed />
          </StarWrapper>
          <ProgressWrapper>
            <StyledProgress value={rates.value} max={total} />
          </ProgressWrapper>
          <RatingValue>{rates.value}</RatingValue>
        </BarRow>
      ))}
    </BarContainer>
  );
};