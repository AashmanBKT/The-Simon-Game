import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Section />
        <Hero />
        <Benefits />
        <Collaboration />
        <Pricing />
        <Footer />


      </div>


      <ButtonGradient />
    </>

  )
}

export default App
