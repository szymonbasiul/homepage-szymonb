import { email } from "../email";
import { LinkButton } from "../LinkButton";
import {
  Container,
  Text,
  Header,
  Icon,
  PersonalImage,
  Preheader,
} from "./styled";
import personalImage from "./Szymon_Basiul.jpg";

const PersonalInfo = () => {
  return (
    <Container>
      <PersonalImage src={personalImage} alt="Szymon Basiul" />
      <div>
        <Preheader>This is</Preheader>
        <Header>Szymon Basiul</Header>
        <Text>
          I'm self-learning to become Frontend Developer, currently
          looking for my first commercial experience.
        </Text>
        <LinkButton href={`mailto:${email}`} title={email}>
          <Icon />
          Hire Me
        </LinkButton>
      </div>
    </Container>
  );
};

export default PersonalInfo;
