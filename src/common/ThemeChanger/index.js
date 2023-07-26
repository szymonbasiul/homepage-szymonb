import { Button, Container, Icon, IconWrapper, Switch, Text } from "./styled";

const ThemeChanger = () => {
  return (
    <Container>
      <Button>
        <Text>Dark mode off/on</Text>
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
