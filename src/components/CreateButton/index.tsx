import { PlusCircle } from "phosphor-react";
import { Text } from "../Text";
import { Button } from "./styles";

interface CreateButtonProps {
  onAddTask: () => void;
  disabled?: boolean;
}

export const CreateButton = ({ onAddTask, disabled }: CreateButtonProps) => {
  return (
    <Button onClick={onAddTask} disabled={disabled}>
      <Text weight="bold" size={14} color="#F2F2F2">
        Criar
      </Text>
      <PlusCircle size={16} weight="bold" color="#F2F2F2" />
    </Button>
  );
};
