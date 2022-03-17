import React , { useState }  from 'react';
import { Routes, Route, BrowserRouter,Navigate } from "react-router-dom";
import mujeres from './assets/mujeresconductoras.webp';
import './App.css';
import Home from './Screens/Home';
import Login from './Components/Login';
import Registro from './Components/Registro';


function App() {
  const [usuario, setUsuario] = useState(null);

  return (

    <div className='app' >
      <BrowserRouter>
        <Routes>
          
          <Route path="/login" element={<Login setUsuario={setUsuario} />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      


        <img src={mujeres} className="App-logo" alt="logo" />
        <h1>HER WAY APP</h1>

        <Routes>
        <Route path="/" element={<Home usuario={usuario} />} />
        </Routes>

        </BrowserRouter>

    </div>
  );
}

export default App;
