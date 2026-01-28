import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Logos from "./components/sections/Logos";
import Main from "./components/sections/Main";
import Navigation from "./components/sections/Navigation";
import Page from "./components/sections/Page";
import Reviews from "./components/sections/Reviews";

function App() {
  return (
    <Page>
      <Header>
        <Navigation/>
        <Hero/>
        <Reviews/>
      </Header>
      <Main>
        <Logos/>
      </Main>
    </Page>
  )
}

export default App;
