import Navbar from "./components/Portfolio/Navbar/Navbar";
import Hero from "./components/Portfolio/Hero/Hero";
import Skill from "./components/Portfolio/Skills/Skill";
import Projects from "./components/Portfolio/Projects/Projects";
import About from "./components/Portfolio/AboutMe/AboutMe";
import Footer from "./components/Portfolio/Footer";
import Github from "./components/Portfolio/GitHub";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="home">
          <Hero />
        </div>
        <div id="skills">
          <Skill />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <About />
        </div>
        <div>
          <Github />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
