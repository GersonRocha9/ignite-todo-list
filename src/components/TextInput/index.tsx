import { InputHTMLAttributes } from "react";
import { Container, Input } from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value: string;
}

export const TextInput = ({ value, placeholder, ...props }: TextFieldProps) => {
  return (
    <Container {...props}>
      <Input placeholder={placeholder} value={value} />
    </Container>
  );
};
