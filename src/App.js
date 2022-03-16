import React , { useState }  from 'react';
import './App.css';
import Home from './Screens/Home';
import Login from './Components/Login';


function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <div>
        {
          usuario ? <Home usuario={usuario} /> : <Login/>
        }


    </div>
  );
}

export default App;
