import ThemeChanger from "../../../common/ThemeChanger";
import Footer from "./Footer";
import PersonalInfo from "./PersonalInfo";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import { nextSkills, skills } from "./skillsSettings";

export const PersonalHomepage = () => {
  return (
    <>
      <ThemeChanger />
      <PersonalInfo />
      <Skills title={<>My skillset includes</>} skills={skills} />
      <Skills title={<>What I want to learn next</>} skills={nextSkills} />
      <Portfolio />
      <Footer />
    </>
  );
};

export default PersonalHomepage;
