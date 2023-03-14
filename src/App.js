
import './App.css';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx'
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
