import AppRouter from "./Router";
import { GlobalStyles } from "./style/GroblaStyles";
import styled from "styled-components";
function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
    </>
  );
}

export default App;
const AppWrapper = styled.div`
  width: 2560px;
  height: 1440px;
  margin: 0 auto;
`;
