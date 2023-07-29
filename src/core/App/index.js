import PersonalHomepage from "../../features/personalHomepage/PersonalHomepage";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themeLight } from "./theme";

export const App = () => {
  return (
    <ThemeProvider theme={themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
