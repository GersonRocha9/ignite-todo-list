interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div>
      <div>
        <input type="checkbox" checked={task.isDone} />
        <span>{task.title}</span>
      </div>
    </div>
  );
};
