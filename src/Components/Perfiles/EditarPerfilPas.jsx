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

export default function EditPerfil() {
    const pasajera = useSelector(state => state.LoginRegisReducer.usuariaLogueada)
    
  const navigate = useNavigate();
  const [form, setForm] = useState({
 nombre: pasajera[0]?.nombre,
  usuario:pasajera[0]?.usuario,
  oldContrasena:pasajera[0]?.contrasena,
  contrasena: "",
  confirm_contrasena: "",
  email: pasajera[0]?.email,
  direccion: pasajera[0]?.direccion,
  telefono: pasajera[0]?.telefono,
  });
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
     await updatePasajera(userForm  , pasajera[0].id)
     navigate('/perfilPasajera')
 };

    

  return (
    <main>
     <div className={style.contain}>
      <h3 className={style.register}> ACTUALIZAR PERFIL </h3>
     <form className={style.form} onSubmit={handleSubmit}>
       <div className={style.info}>
     <strong><i>Para una mayor seguridad , si desea cambiar su email debe mandar un mensaje solicitando el cambio y el motivo del mismo.</i></strong>
        <p>Para solicitar el cambio de su email hacer click <Link to='/contacto'> aquí</Link> </p>
        </div>
        
        <div className={style.nombre}>
        <label>Nombre</label>
<div className={style.containName}>
<input className={style.input} type="text" name="nombre" value={form.nombre} onChange={handleChange}/>
          {errors.nombre && <span className={style.errName}>{errors.nombre}</span>}
    
</div>
</div>
     <div className={style.containLR}>

      <div className={style.left}>
     

      <label>Usuario</label>
      <div className={style.containUser}>
      <input className={style.input} type="text" name="usuario" value={form.usuario} onChange={handleChange}/>
                {errors.usuario && <span className={style.errUser}>{errors.usuario}</span>}
      </div>

      <label>Contraseña</label>
      <div className={style.containPass}>
        <input className={style.input} type="text" name="oldContrasena" value={form.oldContrasena} onChange={handleChange}/>
                
      </div>
      <label>Nueva Contraseña</label>
      <div className={style.containPass}>
        <input className={style.input} type="password" name="contrasena" value={form.contrasena} onChange={handleChange}/>
                {errors.contrasena && <span className={style.errPass}>{errors.contrasena}</span>}
      </div>
 </div>
      <div className={style.right}>
      
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
      <label>Confirmar contraseña</label>
      <div className={style.containR} >
        <input className={style.input} type="password" name="confirm_contrasena" value={form.confirm_contrasena} onChange={handleChange}/>
        {errors.confirm_contrasena && <span className={style.errCpass}>{errors.confirm_contrasena}</span>}
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