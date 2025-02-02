
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route   } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Services';
import Contact from './Pages/Contact';

const App = () => {
  return <>
 <Navbar />
    <Routes>  
      <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About />} />
    <Route path='/services' element={<Service />} />
    <Route path='/contact' element={<Contact />} />

    </Routes>

  </>
}

export default App;
