import React   from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';

import Landing from './Components/Landing/Landing'
import Slider from './Components/Landing/Slider'
import Navbar from './Components/Landing/Navbar'
import MujerPasajera from './Media/MujerPasajera.JPG'
import MujerLibre from './Media/mujerLibre.JPG'
import PulgarArriba from './Media/pulgarArriba.JPG'
import Home from './Screens/Home';
import Login from './Components/Login';
import Registro from './Components/Registro';
import PerfilPasajera from './Components/PerfilPasajera/PerfilPasajer';

function App() {
  // const [usuario, setUsuario] = useState(null);

  return (

    <div className="App">
      <Navbar />
      <Landing imageSrc={MujerPasajera} />
      <Slider imageSrc={MujerLibre} title={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'} />
      <Slider imageSrc={PulgarArriba} title={'Ut enim ad minima veniam, quis nostrum exercitationem'} flipped={true} />


    <div  >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registro />} />
          <Route exact  path="/" element={<Home />} />
          <Route path='/perfilPasajera' element={<PerfilPasajera />} />
        </Routes>

        </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
