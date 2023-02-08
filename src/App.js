import './App.css';
import Navbar from './components/appBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services'
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="page_block Home" id="Home">
        <Home/>
      </section>
      <section className="page_block About" id="About">
        <About/>
      </section>
      <section className="page_block Skills" id="Skills">
        <Skills/>
      </section>
      <section className="page_block Services" id="Services">
        <Services/>
      </section>
      <section className="page_block Works" id="Works">
        <Works/>
      </section>
      <section className="page_block Contact" id="Contact">
        <Contact/>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
