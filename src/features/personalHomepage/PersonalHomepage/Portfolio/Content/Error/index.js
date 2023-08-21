import { LinkButton } from "../../../LinkButton";
import { githubUsername } from "../../githubUsername";
import { Container, Header, Text } from "./styled";
import { ReactComponent as WarningIcon } from "./warning.svg";

export const Error = () => (
  <Container>
    <WarningIcon />
    <Header>Ooops! Something went&nbsp;wrong...</Header>
    <Text>
      Sorry, failed to load Github&nbsp;projects.
      <br /> You can check them directly&nbsp;on&nbsp;Github.
    </Text>
    <LinkButton href={`https://github.com/${githubUsername}`} target="_blank">
      Go to Github
    </LinkButton>
  </Container>
);
