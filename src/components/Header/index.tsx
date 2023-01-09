import todoLogo from "../../assets/logo.svg";
import { HeaderContainer } from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={todoLogo} alt="" />
    </HeaderContainer>
  );
};
