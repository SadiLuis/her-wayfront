import React   from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Home from './Screens/Home';
import Login from './Components/Login';
import Registro from './Components/Registro';
import PerfilPasajera from './Components/PerfilPasajera/PerfilPasajer';


function App() {
  // const [usuario, setUsuario] = useState(null);

  return (

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
  );
}

export default App;
