import { StyledMenuTab, Tab, Background } from "./styled";
import Menu from "../LogoAndMenu/Menu";
import { useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../menuSlice";

const MenuTab = () => {
  const isMenuOpen = useSelector(selectIsMenuOpen);

  return (
    <StyledMenuTab menuState={isMenuOpen}>
      <Tab>
        <Menu location="tab" />
      </Tab>
      <Background />
    </StyledMenuTab>
  );
};

export default MenuTab;
