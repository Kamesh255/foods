import './App.css';
import Food from './components/Food';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Cart from './components/Cart';
import Deliverd from './components/Deliverd';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/food' element={<Food />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/deliverd' element={<Deliverd />} />
      </Routes>
    </div>
  );
}

export default App;
