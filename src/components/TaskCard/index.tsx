import { Trash } from "phosphor-react";
import { CardContainer, Container } from "./styles";

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

interface TaskCardProps {
  task: Task;
  onDeleteTask: (id: string) => void;
  onToggleTask: (id: string) => void;
}

export const TaskCard = ({
  task,
  onDeleteTask,
  onToggleTask,
}: TaskCardProps) => {
  return (
    <Container>
      <CardContainer isDone={task.isDone}>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggleTask(task.id)}
        />

        <span>{task.title}</span>
        <button onClick={() => onDeleteTask(task.id)}>
          <Trash size={16} color="#808080" />
        </button>
      </CardContainer>
    </Container>
  );
};
