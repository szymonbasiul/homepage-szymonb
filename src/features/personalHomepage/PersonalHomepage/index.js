import Footer from "./Footer";
import PersonalInfo from "./PersonalInfo";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

export const PersonalHomepage = () => {
  return (
    <>
      <PersonalInfo />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
};

export default PersonalHomepage;
