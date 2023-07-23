import PersonalHomepage from "../../features/personalHomepage/PersonalHomepage";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </div>
  );
}

export default App;
