import styled from "styled-components";

interface ITaskCardProps {
  isDone: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 736px;
`;

export const CardContainer = styled.div<ITaskCardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 819px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.base.gray[500]};
  border: 1px solid ${({ theme }) => theme.colors.base.gray[400]};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin-bottom: 16px;
  color: ${({ theme, isDone }) =>
    isDone ? theme.colors.base.gray[300] : theme.colors.base.gray[100]};
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;
