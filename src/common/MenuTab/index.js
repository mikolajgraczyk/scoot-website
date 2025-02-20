import { Tab, Button, Background } from "./styled";
import Menu from "../LogoAndMenu/Menu";
import { useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../menuSlice";

const MenuTab = () => {
  const isMenuOpen = useSelector(selectIsMenuOpen);

  return (
    <>
      <Tab menuState={isMenuOpen}>
        <Menu location="tab" />
        <Button>Get Scootin</Button>
      </Tab>
      <Background menuState={isMenuOpen} />
    </>
  );
};

export default MenuTab;
