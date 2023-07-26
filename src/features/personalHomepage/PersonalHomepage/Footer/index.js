import {
  Container,
  EmailLink,
  Preheader,
  SocialIcons,
  Text,
} from "./styled";

const Footer = () => {
  return (
    <Container>
      <div>
        <Preheader>Let's talk!</Preheader>
        <EmailLink>szymon.basiul@gmail.com</EmailLink>
        <Text>
          I'm open for new job opportunities as a Junior Frontend Developer. If
          you're looking for a talented employee or want some help with your
          project, feel free to contact me.
        </Text>
        <SocialIcons>Github, LinkedIn</SocialIcons>
      </div>
    </Container>
  );
};

export default Footer;
