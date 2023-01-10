import { CreateButton, Header, TaskCard, TextInput } from "../../components";
import { Container, FormContainer, TasksContainer } from "./styled";

const listOfMockedTasks = [
  {
    id: "1",
    title: "Task 1",
    isDone: false,
  },

  {
    id: "2",
    title: "Task 2",
    isDone: true,
  },

  {
    id: "3",
    title: "Task 3",
    isDone: false,
  },
];

export const Home = () => {
  return (
    <Container>
      <Header />
      <FormContainer>
        <TextInput placeholder="Adicione uma nova tarefa" />
        <CreateButton />
      </FormContainer>

      <TasksContainer>
        {listOfMockedTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </TasksContainer>
    </Container>
  );
};
