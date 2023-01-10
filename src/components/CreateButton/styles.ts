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
  color: ${({ theme }) => theme.colors.base.gray[100]};
  font-weight: 700;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue.default};
  }
`;
