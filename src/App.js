import logo from "./logo.svg";
import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
