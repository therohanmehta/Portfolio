import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import About from "./Components/About/About";
import ConnectMe from "./Components/ConnectMe/ConnectMe";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
function App() {
  return (
    <div className="mainscreen">
      <NavBar />
       <div id="home🏠" />
      <Home/>
      <div id="about😎" />
      <About />
      <div id="connectme📱" />
      <ConnectMe />
      <div id="projects💻" />
      <Projects />
    </div>
  );
}

export default App;
