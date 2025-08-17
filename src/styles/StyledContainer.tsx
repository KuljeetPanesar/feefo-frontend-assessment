import styled from "styled-components";

export const StyledContainer = styled.div`
  overflow: hidden;
  width: 95%;
  // change width to adjust to be smaller if needed but fixed at around the size of the header plus 5rem either size
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;

  // Desktop default
  width: 35rem;

  // Tablet
  @media (max-width: 1024px) {
    width: 25rem;
  }

  // Mobile
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 12px;
  }
`;