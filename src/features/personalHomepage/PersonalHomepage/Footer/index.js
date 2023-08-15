import { SocialIcons } from "./SocialIcons";
import { Container, EmailLink, Preheader, Text } from "./styled";

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
        <SocialIcons />
      </div>
    </Container>
  );
};

export default Footer;
