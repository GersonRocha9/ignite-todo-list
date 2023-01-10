import styled, { css } from "styled-components";

export const Input = styled.input.attrs({
  placeholderTextColor: "#808080",
})`
  ${({ theme }) => css`
    background: ${theme.colors.base.gray[600]};
    border: none;
    color: ${theme.colors.base.gray[100]};
    font-size: 14px;
    padding: 16px;
    padding-right: 63px;
    width: 100%;
    &:focus-visible {
      outline: 0;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.base.gray[500]};
    border: 1px solid ${theme.colors.base.gray[700]};
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 720px;

    &:focus-within,
    &:focus {
      border-color: ${theme.colors.purple.dark};
    }
  `}
`;
