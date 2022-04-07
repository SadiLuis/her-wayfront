import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register, updateUser } from '../actions/Usuarios'
import { useDispatch } from 'react-redux'
import { Button } from 'bootstrap'
import { auth, provider } from '../Firebase-config'
import { saveImages } from '../Helpers/saveImage'
import uno from '../image/1.jpg'
import dos from '../image/2.jpg'
import tres from '../image/3.jpg'
import './Registro.css'



const formulario = {
  nombre: '',
  usuario: '',
  contrasena: '',
  email: '',
  pais: '',
  provincia: '',
  direccion: '',
  telefono: '',
  localidad: '',
  fotoPerfil: ""
}


export default function Registro() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form, setForm] = useState(formulario)
  const [error, setError] = useState()

  const dispatch = useDispatch()


  const handleChange = (name, value) => {


    const newform = {
      ...form,
      [name]: value
    }
    setForm(newform)
    const errors = {
      ...error,
      [name]: ''
    }
    setError(errors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let auxInput = form;

    const urlImage = await saveImages(auxInput.fotoPerfil);
    auxInput.fotoPerfil = urlImage;

    console.log('entro', auxInput)
    setForm({
      nombre: '',
      usuario: '',
      contrasena: '',
      fotoPerfil: '',
      email: '',
      pais: '',
      provincia: '',
      direccion: '',
      telefono: '',
      localidad: ''
    })

    dispatch(register(auxInput))
    navigate('/')
  }






  return (
    <div className="row g-0 pt-3">
      <div class="col-lg-1"></div>
      <div class="col-lg-5">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img class="tamaño" src={uno} alt="First slide" />
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
        <div class="title px-lg-5 pt-lg-4 pb-2 p-4">
          <h1> Her-Way </h1>
        </div>
        <br />
        {/* <div class='px-lg-5r py-lg-4 p-4'></div> */}
        <h2>Registro</h2>
        {/* FORM LOGIN */}
        {/* <div className='col-md-4'>
          <div className='mt-5 ms-5'> */}
        {/* <h1 className='text-center'> REGISTRO </h1> */}
        <form onSubmit={handleSubmit} >
          <div class="mb-1">
            {/* CORREO */}
            <label htmlFor="exampleInputEmail1">&nbsp; Correo</label>
            <input type="email" className="form-control" name='email' value={form.email} onChange={(e) => handleChange(e.target.name, e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu correo" />

          </div>
          {/* Nombre */}
          <div class="mb-1">
            <label htmlFor="exampleInputPassword1">&nbsp; Nombre</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              onChange={(e) => handleChange(e.target.name, e.target.value)} value={form.nombre} name='nombre' placeholder="Nombre" />
          </div>
          {/* USUARIO */}
          <div class="mb-1">
            <label htmlFor="exampleInputPassword1">&nbsp; Nombre de usuario</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nombre de usuario" name='usuario' value={form.usuario} onChange={(e) => handleChange(e.target.name, e.target.value)} />
          </div>
          {/* Contraseña  */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">&nbsp; Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='contrasena' placeholder="Password" value={form.contrasena} onChange={(e) => handleChange(e.target.name, e.target.value)} />
          </div>
          {/* Foto */}
          <div class="mb-1">
            <label htmlFor="exampleInputPassword1">&nbsp; Foto de Perfil</label>
            <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Nombre de usuario" name='fotoPerfil' onChange={(e) => handleChange(e.target.name, e.target.files[0])} />
          </div>

          {/* PAIS */}
          <div class="mb-1">
            <label htmlFor="exampleInputPassword1">&nbsp; País</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              onChange={(e) => handleChange(e.target.name, e.target.value)} value={form.pais} placeholder="Pais" name='pais' />
          </div>

          {/* Provincia */}
          <div class="mb-1">
            <label htmlFor="exampleInputPassword1">&nbsp; Provincia</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              onChange={(e) => handleChange(e.target.name, e.target.value)} value={form.provincia} placeholder="Provincia" name='provincia' />
          </div>
          {/* Ciudad */}
          <div class="mb-1">
            <label htmlFor="exampleInputPassword1">&nbsp; Ciudad</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              onChange={(e) => handleChange(e.target.name, e.target.value)} value={form.localidad} placeholder="Ciudad" name='localidad' />
          </div>
          {/* DIRECCIONS */}
          <div class="mb-1">
            <label htmlFor="exampleInputPassword1">&nbsp; Dirección</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              onChange={(e) => handleChange(e.target.name, e.target.value)} value={form.direccion} placeholder="Direccion" name='direccion' />
          </div>
          {/* Telefono */}
          <div class="mb-1">
            <label htmlFor="exampleInputPassword1">&nbsp; Teléfono</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
              onChange={(e) => handleChange(e.target.name, e.target.value)} value={form.telefono} placeholder="Telefono" name='telefono' />
          </div>

          <div className="form-group form-check">
          </div>
          <button type="submit" class="btn btn-primary w-100" >Registrarse</button>
          <div div className="form-group form-check p-2 text-center">
            <small >El equipo de Her-Way nunca te pedirá tu correo o contraseña. </small>
          </div>

        </form>

      </div>


    </div>

  )
}