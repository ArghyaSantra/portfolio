import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ResumeSection from "./components/ResumeSection";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Journey />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
