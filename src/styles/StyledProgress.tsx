import styled from "styled-components";

export const StyledProgress = styled.progress`
  width: 100%;
  height: 20px;
  border-radius: 0;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0;
  }

  &::-webkit-progress-value {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 0;
  }

  &::-moz-progress-bar {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 0;
  }
`;
