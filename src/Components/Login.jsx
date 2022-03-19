//import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import uno from '../image/1.jpg'
import dos from '../image/2.jpg'
import tres from '../image/3.jpg'



export default function Login() {
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
          <form>
            <div className="form-group"> {/* CORREO */}
              <label htmlFor="exampleInputEmail1">Correo</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">El equipo de Her-Way jamás bajo ninguna circunstancia pedira su correo o contraseña. </small>
              {/* Contraseña  */}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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
