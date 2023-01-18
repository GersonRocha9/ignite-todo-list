import { useEffect, useState } from "react";
import { CreateButton, Header, TaskCard, TextInput } from "../../components";
import { Text } from "../../components/Text";
import {
  Badge,
  Container,
  Divider,
  FormContainer,
  InfoContainer,
  InfoWrapper,
  InfoWrapperInfo,
  TasksContainer,
} from "./styled";

import Cliboard from "../../assets/Clipboard.svg";
import { api } from "../../services/api";

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

export const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  console.log(tasks);

  async function getTasks() {
    const response = await api.get("/tasks");
    const data = response.data;
    setTasks(data);
  }

  useEffect(() => {
    getTasks();
  }, []);

  function addNewTask() {
    const newTaskObject = {
      id: String(new Date().getTime()),
      title: newTask,
      isDone: false,
    };

    api.post("/tasks", newTaskObject);

    setTasks([...tasks, newTaskObject]);

    setNewTask("");
  }

  function handleDeleteTask(id: string) {
    api.delete(`/tasks/${id}`);
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function handleToggleTask(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }

      if (task.isDone === true) {
        api.patch(`/tasks/${id}`, { isDone: false });

        return task;
      }

      api.patch(`/tasks/${id}`, { isDone: true });
      return task;
    });

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
        <CreateButton onAddTask={addNewTask} disabled={!newTask} />
      </FormContainer>

      <InfoContainer>
        <InfoWrapper>
          <InfoWrapperInfo>
            <Text size={14} weight="bold" color="#4EA8DE">
              Tarefas criadas
            </Text>
            <Badge>
              <Text size={14} weight="bold" color="#4EA8DE">
                {tasks.length}
              </Text>
            </Badge>
          </InfoWrapperInfo>

          <InfoWrapperInfo>
            <Text size={14} weight="bold" color="#8284FA">
              Concluídas
            </Text>
            <Badge>
              <Text size={14} weight="bold" color="#8284FA">
                {tasks.filter((task) => task.isDone).length} de {tasks.length}
              </Text>
            </Badge>
          </InfoWrapperInfo>
        </InfoWrapper>
      </InfoContainer>

      <TasksContainer>
        {tasks.length !== 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDeleteTask={() => handleDeleteTask(task.id)}
              onToggleTask={() => handleToggleTask(task.id)}
            />
          ))
        ) : (
          <>
            <Divider />
            <img
              src={Cliboard}
              alt="Você ainda não tem tarefas cadastradas"
              style={{
                width: 56,
                height: 56,
                marginBottom: 16,
                marginTop: 64,
              }}
            />

            <Text
              size={16}
              weight="bold"
              color="#808080"
              style={{
                marginBottom: 8,
              }}
            >
              Você ainda não tem tarefas cadastradas
            </Text>

            <Text size={16} color="#808080">
              Crie tarefas e organize seus itens a fazer
            </Text>
          </>
        )}
      </TasksContainer>
    </Container>
  );
};
