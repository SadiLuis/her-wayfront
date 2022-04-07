import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {updatePasajera} from '../../actions/Usuarios'
import {useSelector ,useDispatch} from 'react-redux'
import Swal from "sweetalert2";
import style from './EditarPerfil.module.css'


function validateTlf(value) {
    let regex = /[0123456789]{10}/;
 
    return regex.test(value);
 }

function validateEmail(value) {
    let validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
    return validRegex.test(value);
  }


const validateform = function (form) {
  const errors = {};
  if (!form.nombre.trim()) {
    errors.nombre = "Campo requerido";
  } else if (form.nombre.length < 4) {
    errors.nombre = "Mínimo 4 caracteres";
  } else if (form.nombre.length > 25) {
    errors.nombre = "Máximo 25 caracteres";
  }

  if (!form.usuario.trim()) {
    errors.usuario = "Campo requerido";
  } else if (form.usuario.length < 5) {
    errors.usuario = "Mínimo 5 caracteres";
  } else if (form.usuario.length > 15) {
    errors.usuario = "Máximo 15 caracteres";
  }

  if (!form.contrasena.trim()) {
    errors.contrasena = "Campo requerido";
  } else if (form.contrasena.length < 6) {
    errors.contrasena = "Mínimo 6 caracteres";
  }

  if (!form.email.trim()) {
    errors.email = "Campo requerido";
  } else if (!validateEmail(form.email)) {
    errors.email = "Escriba un email válido";
  }

  if (!form.pais.trim()) {
    errors.pais = "Campo requerido";
  }

  if (!form.provincia.trim()) {
    errors.provincia = "Campo requerido";
  }

  if (!form.direccion.trim()) {
    errors.direccion = "Campo requerido";
  } else if (form.direccion.length < 10) {
    errors.direccion = "Mínimo 10 caracteres";
  } else if (form.direccion.length > 40) {
    errors.direccion = "Máximo 40 caracteres";
  }

  if (!form.telefono.trim()) {
    errors.telefono = "Campo requerido";
  } else if (!validateTlf(form.telefono)) {
    errors.telefono = "Escriba un número de telefono válido";
  }

  if (form.confirm_contrasena !== form.contrasena) {
    errors.confirm_contrasena = "Las contraseñas no coinciden";
  }

  return errors;
};

export default function EditarPerfilConductora() {
    const conductora = useSelector((state) => state.registroConductoraReducer.conducLogueada)
    //const user = useSelector(state => state.LoginRegisReducer.userInfo)
  const navigate = useNavigate();
  const [form, setForm] = useState({
 nombre: conductora[0].nombre,
  usuario:conductora[0].usuario,
  oldContrasena:conductora[0].contrasena,
  contrasena: "",
  confirm_contrasena: "",
  email: conductora[0].email,
  pais: conductora[0].pais,
  provincia: conductora[0].provincia,
  direccion: conductora[0].direccion,
  telefono: conductora[0].telefono,
  localidad: conductora[0].localidad});
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    const newform = { ...form, [name]: value };
    setForm(newform);
    const error = validateform(newform);
    setErrors(error);
    return newform;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     
    const error = validateform(form);
    setErrors(error)
    if (Object.keys(errors).length) {
        Swal.fire({
         icon: 'error',
         title: 'El formulario contiene errores',
         
        })
    }
    const userForm = { ...form };
    delete userForm.confirm_contrasena;
     console.log(userForm)
     await updatePasajera(userForm  , conductora[0].id)
     navigate('/perfilPasajera')
 };

    

  return (
    <main>
     <div className={style.contain}>
      <h3 className={style.register}> ACTUALIZAR PERFIL </h3>
     <form className={style.form} onSubmit={handleSubmit}>
     <div className={style.containLR}>

      <div className={style.left}>
      <label>Nombre</label>

      <div className={style.containName}>
      <input className={style.input} type="text" name="nombre" value={form.nombre} onChange={handleChange}/>
                {errors.nombre && <span className={style.errName}>{errors.nombre}</span>}
      </div>

      <label>Usuario</label>
      <div className={style.containUser}>
      <input className={style.input} type="text" name="usuario" value={form.usuario} onChange={handleChange}/>
                {errors.usuario && <span className={style.errUser}>{errors.usuario}</span>}
      </div>

      <label>Contraseña</label>
      <div className={style.containPass}>
        <input className={style.input} type="text" name="oldContrasena" value={form.oldContrasena} onChange={handleChange}/>
                {errors.contrasena && <span className={style.errPass}>{errors.contrasena}</span>}
      </div>
      <label>Nueva Contraseña</label>
      <div className={style.containPass}>
        <input className={style.input} type="password" name="contrasena" value={form.contrasena} onChange={handleChange}/>
                {errors.contrasena && <span className={style.errPass}>{errors.contrasena}</span>}
      </div>


      <label>Confirmar contraseña</label>
      <div className={style.containCpass} >
        <input className={style.input} type="password" name="confirm_contrasena" value={form.confirm_contrasena} onChange={handleChange}/>
        {errors.confirm_contrasena && <span className={style.errCpass}>{errors.confirm_contrasena}</span>}
      </div>

     

      </div>
      <div className={style.right}>
      <label>Email</label>
      <div className={style.containR} >
        <input className={style.input} type="email" name="email" value={form.email} onChange={handleChange}/>
        {errors.email && <span className={style.errEmail}>{errors.email}</span>}
      </div>
      <label>País</label>
      <div className={style.containR}>
        <input className={style.input} type="text" name="pais" value={form.pais} onChange={handleChange}/>
        {errors.pais && <span className={style.errR}>{errors.pais}</span>}
      </div>

      <label>Provincia</label>
      <div className={style.containR}>
        <input className={style.input} type="text" name="provincia" value={form.provincia} onChange={handleChange}/>
        {errors.provincia && <span className={style.errR}>{errors.provincia}</span>}
      </div>

      <label>Dirección</label>
      <div className={style.containR}>
        <input className={style.input} type="text" name="direccion" value={form.direccion} onChange={handleChange}/>
        {errors.direccion && <span className={style.errR}>{errors.direccion}</span>}
      </div>

      <label>Telefono</label>
      <div className={style.containR}>
        <input className={style.input} type="text" name="telefono" value={form.telefono} onChange={handleChange}/>
        {errors.telefono && <span className={style.errR}>{errors.telefono}</span>}
      </div>
      <div className={style.contain_btns}>
        
      <input
              type="submit"
              value="Actualizar"
              className={style.btn_resgister}
            />
           </div>
           
      </div>
     </div>

     
     </form>
     </div>
    </main>
  );
}