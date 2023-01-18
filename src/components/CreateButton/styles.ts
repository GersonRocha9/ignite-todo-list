import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blue.dark};
  padding: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue.default};
  }
`;
