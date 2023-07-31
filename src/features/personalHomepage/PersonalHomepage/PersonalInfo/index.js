import ThemeChanger from "../../../../common/ThemeChanger";
import {
  Button,
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
    <div>
      <ThemeChanger />
      <Container>
        <PersonalImage src={personalImage} alt="Szymon Basiul" />
        <div>
          <Preheader>This is</Preheader>
          <Header>Szymon Basiul</Header>
          <Text>
            I'm learning to become Frontend Developer with React, currently
            looking for my first commercial experience.
          </Text>
          <Button href="">
            <Icon />
            Hire Me
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default PersonalInfo;
