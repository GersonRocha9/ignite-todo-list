import { useState } from "react";
import { CreateButton, Header, TaskCard, TextInput } from "../../components";
import { Text } from "../../components/Text";
import {
  Container,
  FormContainer,
  InfoContainer,
  InfoWrapper,
  TasksContainer,
} from "./styled";

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

export const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function addNewTask() {
    if (!newTask) return;

    const newTaskObject = {
      id: String(new Date().getTime()),
      title: newTask,
      isDone: false,
    };

    setTasks((oldState) => [...oldState, newTaskObject]);
    setNewTask("");
  }

  function handleDeleteTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function handleToggleTask(id: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );

    setTasks(updatedTasks);
  }

  return (
    <Container>
      <Header />
      <FormContainer>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <CreateButton onAddTask={addNewTask} />
      </FormContainer>

      <InfoContainer>
        <InfoWrapper>
          <Text size={14} weight="bold" color="#4EA8DE">
            Tarefas criadas {tasks.length}
          </Text>

          <Text size={14} weight="bold" color="#8284FA">
            Concluídas {tasks.filter((task) => task.isDone).length} de
            {tasks.length}
          </Text>
        </InfoWrapper>
      </InfoContainer>

      <TasksContainer>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDeleteTask={() => handleDeleteTask(task.id)}
            onToggleTask={() => handleToggleTask(task.id)}
          />
        ))}
      </TasksContainer>
    </Container>
  );
};
