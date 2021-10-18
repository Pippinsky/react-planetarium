import styled from "styled-components";
import Footer from "./layout/footer/Footer";
import ApplicationRouter from "./routes";

const AppContainer = styled.section`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

function App() {
  return (
    <AppContainer>
      <ApplicationRouter />
      <Footer />
    </AppContainer>
  );
}

export default App;
