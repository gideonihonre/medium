import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"

import styled from "styled-components"
const MainContent = styled.div`
  display: flex;
  width: 100%;
  padding: 0;
  min-height: calc(100vh - 52px);

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
`

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Feed />
        <Sidebar />
      </MainContent>
    </AppContainer>
  )
}

export default App
