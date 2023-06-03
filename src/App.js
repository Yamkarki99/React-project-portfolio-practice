import logo from "./logo.svg";
import "./App.css";
import { AboutMe } from "./Components/Aboutme";
import { ContactMe } from "./Components/Contactme";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Navigation } from "./Components/Navigation";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contactme />
    </div>
  );
}

export default App;
