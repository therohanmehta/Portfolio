
import './App.css';
import Navbar from "./Components/Navbar/NavBar";
import About from "./Components/About/About";
import ConnectMe from "./Components/ConnectMe/ConnectMe";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import NavBar from './Components/Navbar/NavBar'
function App() {
  return (
    <div className='mainscreen'>
      
      <NavBar/>
    {/* <Home/> */}
    <About/>
<ConnectMe/>
    <Projects/>
    </div>
  );
}

export default App;
