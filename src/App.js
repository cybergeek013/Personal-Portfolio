import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Footer from "./components/Footer";

function App() { 
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Qualification />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}
export default App;