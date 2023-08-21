import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import { Address, Container, EmailContainer, EmailLink, Preheader, Text } from "./styled";

const Footer = () => {
  return (
    <Container>
      <Preheader>Let's talk!</Preheader>
      <div>
        <Address>
          <EmailContainer>
            <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
          </EmailContainer>
          <Text>
            I'm open for new job opportunities as a Junior Frontend Developer.
            If you're looking for a talented employee or want some help with
            your project, feel free to contact me.
          </Text>
          <SocialIcons />
        </Address>
      </div>
    </Container>
  );
};

export default Footer;
