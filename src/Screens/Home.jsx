import React from 'react'
import { Link } from 'react-router-dom'
import mujeres from '../assets/mujeresconductoras.webp';


export default function Home() {
  return (
    <div className='app' >
      
      <img src={mujeres} className="App-logo" alt="logo" />
        <h1 className='herway' >HER WAY APP</h1>

      <div className='conteiner' >
      <h1 className='pasajerayconductora' >Eres pasajera?</h1>
      <Link to="/login">
        <button style={{
          backgroundColor: 'black',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          
        }}>Iniciar sesión</button>
      </Link>

      <h1 className='pasajerayconductora' > Eres conductora? </h1>
      <Link to="/login"  >
        <button style={{
          backgroundColor: 'black',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',

        }} >Iniciar sesión</button>
      </Link>

      </div>
      

    </div>
  )
}
