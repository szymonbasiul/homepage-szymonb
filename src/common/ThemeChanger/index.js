import { Button, Container, Switch, Text } from "./styled";

const ThemeChanger = () => {
  return (
    <Container>
      <Button>
        <Text>Dark mode off/on</Text>
        <Switch />
      </Button>
    </Container>
  );
};

export default ThemeChanger;
