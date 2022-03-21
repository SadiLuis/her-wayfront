//import { Button } from 'bootstrap'
import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { login } from '../actions/Usuarios';
import uno from '../image/1.jpg'
import dos from '../image/2.jpg'
import tres from '../image/3.jpg'

const initialLogin = {
  contraseña : '',
  email: ''
}

export default function Login() {

  const [formlogin, setFormLogin] = useState(initialLogin)
  const [error, setError] = useState()
  const navigate = useNavigate()
  const dispach= useDispatch()

  const handleChange = (e) => {
    
    setFormLogin({
      ...formlogin,
      [e.target.name]: e.target.value
    })
    const errors = {
      ...error,
      [e.target.name]: ''
    }
    setError(errors)

    console.log(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = {
      ...error,
      contrasena: '',
      email: ''
    }
    setError(errors)

    dispach (login(formlogin))
    console.log(formlogin)
    navigate('/')
  }
  
return (
    <div className='row conteiner p-4' >
      <div className='col-md-8'>

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="tamaño" src={uno} alt="First slide" />
            </div>
            <div className="carousel-item">
             <img className="tamaño" src={dos} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="tamaño" src={tres} alt="Third slide" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      {/* FORM LOGIN */}
      <div className='col-md-4'>
        <div className='mt-5 ms-5'>
          <h1 className='text-center'>Login</h1>
          <form onSubmit={handleSubmit} >
            <div className="form-group"> {/* CORREO */}
              <label htmlFor="exampleInputEmail1">Correo</label>
              <input type="email" className="form-control"   placeholder="Ingresar Correo"   name='email' onChange={handleChange} value={formlogin.email} />
              <small >El equipo de Her-Way jamás bajo ninguna circunstancia pedira su correo o contraseña. </small>
              {/* Contraseña  */}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='contrasena' onChange={handleChange}  value={formlogin.contrasena}  />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Comprendo</label>
            </div>
            <button type="submit" className="btn btn-primary">Entrar</button>

            <div className='text-center '>
              <span>¿No tienes cuenta?</span>
              <Link to='/registro' style={{
                color: '#0066ff',
                textDecoration: 'none',
                margin: '5px',
                fontWeight: 'bold'
               
              }} >
                Registrarse
              </Link>
            </div>       
          </form>            
        </div>
      </div>
    </div>  
  )
}
