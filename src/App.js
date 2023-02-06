import './App.css';
import Navbar from './components/appBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="page_block" id="Home">
        <Home/>
      </section>
      <section className="page_block" id="About"></section>
      <section className="page_block" id="Skills"></section>
      <section className="page_block" id="Services"></section>
      <section className="page_block" id="Works"></section>
      <section className="page_block" id="Contact"></section>
      <footer></footer>
    </div>
  );
}

export default App;
