import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar title="Travel" about="About Us" />

    <div className='about container mx-3'>
      <About  />
    </div>
    </>
  );
}

export default App;
