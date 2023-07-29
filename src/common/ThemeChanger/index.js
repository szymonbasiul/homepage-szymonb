import { useDispatch } from "react-redux";
import { Button, Container, Icon, IconWrapper, Switch, Text } from "./styled";


const ThemeChanger = () => {

  const dispatch = useDispatch();
  return (
    <Container>
      <Button>
        <Text>Dark mode off</Text>
        <Switch>
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </Switch>
      </Button>
    </Container>
  );
};

export default ThemeChanger;
