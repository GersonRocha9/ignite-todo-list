import styled from "styled-components";

interface TextProps {
  weight?: "bold" | "regular";
  color?: string;
  size?: number;
}

export const Text = styled.p<TextProps>`
  font-weight: ${({ weight }) => weight || "regular"};
  color: ${({ color }) => color || "#333"};
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
`;
