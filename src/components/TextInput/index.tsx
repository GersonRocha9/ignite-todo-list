import { ChangeEventHandler, InputHTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Input } from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

interface IFormInput {
  value: string;
}

export const TextInput = ({ placeholder, ...props }: TextFieldProps) => {
  const [value, setValue] = useState<string>("");

  console.log(value);

  const { register } = useForm<IFormInput>();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container {...props}>
      <Input
        placeholder={placeholder}
        {...register("value")}
        onChange={onChange}
      />
    </Container>
  );
};
