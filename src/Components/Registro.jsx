import React from 'react'

import uno from '../image/1.jpg'
import dos from '../image/2.jpg'
import tres from '../image/3.jpg'

export default function Registro() {
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
        <h1 className='text-center'>Registro</h1>
        <form>
          <div className="form-group"> {/* CORREO */}
            <label htmlFor="exampleInputEmail1">Correo</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">El equipo de Her-Way jamás bajo ninguna circunstancia pedira su correo o contraseña. </small>
          </div>
            {/* Contraseña  */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          {/* Nombre */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Nombre</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nombre" />
          </div>
          {/* Apellido */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Apellido</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Apellido" />
          </div>
          {/* Telefono */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Telefono</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Telefono" />
          </div>
          {/* Provincia */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Provincia</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Provincia" />
          </div>
          {/* Ciudad */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Ciudad</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Ciudad" />
          </div>


          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Comprendo</label>
          </div>
          <button type="submit" className="btn btn-primary">Registrarse</button>

         


        </form>
            
      </div>


    </div>


  </div>  
  )
}
