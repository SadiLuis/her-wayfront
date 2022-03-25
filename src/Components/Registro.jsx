import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register, updateUser } from '../actions/Usuarios'
import {useDispatch} from 'react-redux'
import { Button } from 'bootstrap'
import { auth, provider } from '../Firebase-config'
import {saveImages} from '../Helpers/saveImage'
import uno from '../image/1.jpg'
import dos from '../image/2.jpg'
import tres from '../image/3.jpg'



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
  fotoPerfil:""
}


export default function Registro (){

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form, setForm] = useState(formulario)
  const [error, setError] = useState()

  const dispatch = useDispatch()


  const handleChange = (name,value) => {
    

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

  const handleSubmit =async (e) => {
    e.preventDefault()
    let auxInput = form;

    const urlImage = await saveImages(auxInput.fotoPerfil);
     auxInput.fotoPerfil = urlImage;
   
    console.log('entro',auxInput)
    setForm({
      nombre: '',
      usuario: '',
      contrasena: '',
      fotoPerfil:'',
      email: '',
      pais: '',
      provincia: '',
      direccion: '',
      telefono: '',
      localidad: ''
    } )
    
    dispatch(register(auxInput))
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
          <h1 className='text-center'> REGISTRO </h1>
          <form onSubmit={handleSubmit} >
            <div className="form-group"> {/* CORREO */}
              <label htmlFor="exampleInputEmail1">Correo</label>
              <input type="email" className="form-control" name='email' value={form.email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">El equipo de Her-Way jamás bajo ninguna circunstancia pedira su correo o contraseña. </small>
            </div>
            {/* Nombre */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Nombre</label>
              <input type="text" className="form-control" id="exampleInputPassword1"
                onChange={(e)=>handleChange(e.target.name,e.target.value)} value={form.nombre} name='nombre' placeholder="Nombre" />
            </div>
            {/* USUARIO */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Nombre de usuario</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nombre de usuario" name='usuario' value={form.usuario} onChange={(e)=>handleChange(e.target.name,e.target.value)} />
            </div>
            {/* Contraseña  */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name='contrasena' placeholder="Password" value={form.contrasena} onChange={(e)=>handleChange(e.target.name,e.target.value)} />
            </div>
             {/* Foto */}
             <div className="form-group">
              <label htmlFor="exampleInputPassword1">Nombre de usuario</label>
              <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Nombre de usuario" name='fotoPerfil'  onChange={(e)=>handleChange(e.target.name,e.target.files[0])} />
            </div>

            {/* PAIS */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Pais</label>
              <input type="text" className="form-control" id="exampleInputPassword1"
                onChange={(e)=>handleChange(e.target.name,e.target.value)} value={form.pais} placeholder="Pais" name='pais' />
            </div>

            {/* Provincia */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Provincia</label>
              <input type="text" className="form-control" id="exampleInputPassword1"
                onChange={(e)=>handleChange(e.target.name,e.target.value)} value={form.provincia} placeholder="Provincia" name='provincia' />
            </div>
            {/* Ciudad */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Ciudad</label>
              <input type="text" className="form-control" id="exampleInputPassword1"
                onChange={(e)=>handleChange(e.target.name,e.target.value)} value={form.localidad} placeholder="Ciudad" name='localidad' />
            </div>
            {/* DIRECCIONS */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Direccion</label>
              <input type="text" className="form-control" id="exampleInputPassword1"
                onChange={(e)=>handleChange(e.target.name,e.target.value)} value={form.direccion} placeholder="Direccion" name='direccion' />
            </div>
          {/* Telefono */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Telefono</label>
            <input type="text" className="form-control" id="exampleInputPassword1"
            onChange={(e)=>handleChange(e.target.name,e.target.value)} value={form.telefono} placeholder="Telefono" name = 'telefono' />
          </div>

          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Comprendo</label>
          </div>
          <button type="submit" className="btn btn-primary" >Registrarse</button>



          </form>

        </div>


      </div>


    </div>
  )
}