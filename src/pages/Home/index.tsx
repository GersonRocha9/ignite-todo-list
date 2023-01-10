import { CreateButton, Header, TextInput } from "../../components";
import { Container, FormContainer } from "./styled";

export const Home = () => {
  return (
    <Container>
      <Header />
      <FormContainer>
        <TextInput placeholder="Adicione uma nova tarefa" />
        <CreateButton />
      </FormContainer>
    </Container>
  );
};
