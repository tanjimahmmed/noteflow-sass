import FAQs from "./components/sections/FAQs/FAQs";
import Features from "./components/sections/Features";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Logos from "./components/sections/Logos";
import Main from "./components/sections/Main";
import Modal from "./components/sections/Modal/Modal";
import SignUpModal from "./components/sections/Modal/SignUpModal";
import Navigation from "./components/sections/Navigation";
import Page from "./components/sections/Page";
import Reviews from "./components/sections/Reviews";
import Testimonials from "./components/sections/Testimonials/Testimonials";

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
        <Features/>
        <FAQs/>
        <Testimonials/>
      </Main>
      <Footer/>
      <Modal>
        <SignUpModal/>
      </Modal>
    </Page>
  )
}

export default App;
