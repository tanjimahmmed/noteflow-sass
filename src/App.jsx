import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Navigation from "./components/sections/Navigation";
import Page from "./components/sections/Page";

function App() {
  return (
    <Page>
      <Header>
        <Navigation/>
        <Hero/>
      </Header>
    </Page>
  )
}

export default App;
