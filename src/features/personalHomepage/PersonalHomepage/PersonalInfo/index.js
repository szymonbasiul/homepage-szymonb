import { Button, Container, Content, Header, PersonalImage, Preheader } from "./styled";
import personalImage from "./Szymon_Basiul.jpg";

const PersonalInfo = () => {
  return (
    <Container>
      <PersonalImage src={personalImage} alt="Szymon Basiul" />
      <div>
        <Preheader>This is</Preheader>
        <Header>Szymon Basiul</Header>
        <Content>
          I'm learning to become Frontend Developer with React, currently
          looking for my first commercial experience.
        </Content>
        <Button>Hire me</Button>
      </div>
    </Container>
  );
};

export default PersonalInfo;
