import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Icon, IconWrapper, Switch, Text } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";

const ThemeChanger = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch(toggleTheme());
  return (
    <Container>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
        <Switch>
          <IconWrapper movetoright={isDarkTheme}>
            <Icon />
          </IconWrapper>
        </Switch>
      </Button>
    </Container>
  );
};

export default ThemeChanger;
