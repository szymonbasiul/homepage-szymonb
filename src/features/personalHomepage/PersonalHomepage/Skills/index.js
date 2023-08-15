import { Bullet, Item, List, Section, StyledHeader } from "./styled";

const Skills = ({ title, skills }) => (
  <Section>
    <StyledHeader>{title}</StyledHeader>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>
          <Bullet />
          {skill}
        </Item>
      ))}
    </List>
  </Section>
);

export default Skills;
