//import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { login } from '../actions/Usuarios';
import uno from '../image/1.jpg'
import dos from '../image/2.jpg'
import tres from '../image/3.jpg';
//import styles from "./Login.module.css"
import LoginConGooglePasajera from './LoginConGooglePasajera';
import './Login.css'



import { pedirConductora } from '../actions/conductora';


const initialLogin = {
  contraseña: '',
  email: ''
}

export default function Login() {

  const [formlogin, setFormLogin] = useState(initialLogin)
  const [error, setError] = useState()
  const navigate = useNavigate()

  const dispatch = useDispatch()

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


    dispatch(login(formlogin))

    console.log(formlogin)
    navigate('/mapa')
  }

  // useEffect(()=>{
  //   dispatch(pedirConductora())
  // }, [dispatch])

  //const handleClickEntrar=(e)=>{
  //  e.preventDefault();
  //  navigate("/pedirConductora")
  return (
    <div class="row g-0 pt-3">
      <div class="col-lg-1"></div>
      <div class="col-lg-5">
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

      <div class="col-lg-5">
        <div class="title px-lg-5 pt-lg-4 pb-lg-3 p-4">
          <h1> Her-Way </h1>
        </div>
        <div class='px-lg-5r py-lg-4 p-4'>
          <h2>Login</h2>
          {/* FORM LOGIN */}
          <form onSubmit={handleSubmit} >
            <div class="mb-3">
              {/* CORREO */}
              <label htmlFor="exampleInputEmail1">Correo</label>
              <input type="email" className="form-control" placeholder="Ingresa tu correo" name='email' onChange={handleChange} value={formlogin.email} />
              {/* Contraseña  */}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresa tu contraseña" name='contrasena' onChange={handleChange} value={formlogin.contrasena} />
              <div>

                <Link to='/resetPassword' style={{
                  color: '#0066ff',
                  textDecoration: 'none',
                  margin: '5px',
                  fontWeight: 'bold'

                }} >
                  ¿ Olvidaste tu contraseña ?
                </Link>
              </div>
            </div>

            <br />

            <button type="submit" class="btn btn-primary w-100"
              disabled={!formlogin.email || !formlogin.contrasena}
            >Entrar</button>
            <br />

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
            <br />

            <LoginConGooglePasajera />
            <br />
            <div className="form-group form-check p-2 text-center">
              <small >El equipo de Her-Way nunca te pedira tu correo o contraseña. </small>
              {/* <br />
                            <label className="form-check-label" htmlFor="exampleCheck1">Comprendo</label>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
            </div>
          </form>


        </div>
      </div>
      <div class="col-lg-1"></div>

      {/* <div >
      <button  className={styles.botonPedirConductora}   
     >
    <Link to="/pedirconductora" style={{color:"#fff"}}> 
   
      Pedir Conductora
      </Link>
    </button>

      </div> */}


    </div>

  )
}