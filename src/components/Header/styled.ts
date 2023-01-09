import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.base.gray[700]};
`;
