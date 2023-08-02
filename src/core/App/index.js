import PersonalHomepage from "../../features/personalHomepage/PersonalHomepage";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
