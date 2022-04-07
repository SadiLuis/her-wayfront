import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {updatePasajera} from '../../actions/Usuarios'
import {useSelector ,useDispatch} from 'react-redux'
import Swal from "sweetalert2";
import style from './EditarPerfil.module.css'
import { updateConductora } from "../../actions/conductora";


function validateTlf(value) {
    let regex = /[0123456789]{10}/;
 
    return regex.test(value);
 }




const validateform = function (form) {
  const errors = {};
  

  if (!form.direccion.trim()) {
    errors.direccion = "Campo requerido";
  } else if (form.direccion.length < 5) {
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
    const conductora = useSelector((state) => state.perfilConductoraReducer.perfilConductora)
    const user = useSelector(state => state.registroConductoraReducer.conducLogueada[0].id)
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const [button, setButton] = useState(true);
  const [form, setForm] = useState({
    nombre: conductora.nombre,
     usuario:conductora.usuario,
     oldContrasena:conductora?.contrasena,
     contrasena: "",
     confirm_contrasena: "",
     email: conductora.email,
     pais: conductora.pais,
     provincia: conductora.provincia,
     direccion: conductora?.direccion,
     telefono: conductora?.telefono,
     localidad: conductora.localidad});
     const [errors, setErrors] = useState({
       direccion: '',
       telefono: '',
       contrasena: ''
     });
  // useEffect(()=>{
  //   form.direccion 
  //   && form?.telefono.length > 0
  //   && form?.oldContrasena.length > 0
  //   && Object.keys(errors.direccion).length===0
  //   && Object.keys(errors.telefono).length===0
  //   && Object.keys(errors.oldContrasena).length===0
  //   ? setButton(false)
  //           : setButton(true)
  // },[form,errors])
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
  })
    const error = validateform(form);
    setErrors(error);
     return form;

    
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     
    if (Object.keys(errors).length) {
        Swal.fire({
         icon: 'error',
         title: 'El formulario contiene errores',
         
        })
    }
    const userForm = { ...form };
    delete userForm.confirm_contrasena;
     console.log(userForm)
    dispatch(updateConductora(userForm  ,user))
     navigate(`/editConductora`)
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
      <input className={style.input} type="text" name="nombre" disabled="true" value={form.nombre} onChange={handleChange}/>
      </div>

      <label>Usuario</label>
      <div className={style.containUser}>
      <input className={style.input} disabled="true" type="text" name="usuario" value={form.usuario} onChange={handleChange}/>
                
      </div>

      <label>Contraseña</label>
      <div className={style.containPass}>
        <input className={style.input} type="text" disabled="true" name="oldContrasena" value={form.oldContrasena} onChange={handleChange}/>
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
        <input className={style.input} type="email" disabled="true" name="email" value={form.email} onChange={handleChange}/>
        
      </div>
      <label>País</label>
      <div className={style.containR}>
        <input className={style.input} type="text" name="pais" disabled="true" value={form.pais} onChange={handleChange}/>
        {errors.pais && <span className={style.errR}>{errors.pais}</span>}
      </div>

      <label>Provincia</label>
      <div className={style.containR}>
        <input className={style.input} type="text" disabled="true" name="provincia" value={form.provincia} onChange={handleChange}/>
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
        
      <button className={style.btn_resgister} >Actualizar</button>
              
            
           </div>
           
      </div>
     </div>
      
                <p> * campos obligatorios</p>
               
           
         
     </form>
     </div>
    </main>
    
  );
}