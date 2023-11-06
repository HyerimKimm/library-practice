import styled from "styled-components";
import Header from "./components/header/Header";
import {useStore} from "./hooks/zustand/useStore";


function App() {
  const { count, inc } = useStore();
  return (
    <AppContainer className="App">
        <Header/>
        햄버거를 { count }번 누름
    </AppContainer>
  );
}

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export default App;
