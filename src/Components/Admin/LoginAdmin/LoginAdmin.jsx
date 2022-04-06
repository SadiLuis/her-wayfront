import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from '../../../actions/administrador';
import style from './LoginAdm.module.css'


const initialLogin = {
    contrasena: '',
    email: ''
}

function validateEmail(value) {
    let validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
    return validRegex.test(value);
  }
  
  const validateForm = (form) => {
    const { email, contrasena } = form;
    const errors = {};
  
    if (!email.trim()) {
      errors.email = "El email es requerido";
    } else if (!validateEmail(email)) {
      errors.email = "Email no válido";
    }
  
    if (!contrasena.trim()) {
      errors.contrasena = "La contraseña es requerida";
    }
  
    return errors;
  };

export default function Login() {

    const isAuth = useSelector(state => state.adminReducer.isAuth)
    const user = useSelector(state => state.adminReducer.userInfo)
    const [formlogin, setFormLogin] = useState(initialLogin)
    const [error, setError] = useState()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormLogin({
            ...formlogin,
            [e.target.name]: e.target.value
        })
        setError(validateForm(formlogin));
        //console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    const errors = validateForm(formlogin);
    setError(errors);

    if (Object.keys(errors).length) {
       Swal.fire({
        icon: 'error',
        title: 'El formulario contiene errores',

       })
    }else {
        dispatch(login(formlogin))
    }

        //navigate('/admin/usuarios')
    }

    useEffect(() => {
        // Si ya está logueado que lo redireccione al dashboard
        if (isAuth && user) {
            setFormLogin(initialLogin);
            navigate('/admin/usuarios')
        }
    },[isAuth,user])

        //   useEffect(()=>{
        //     dispatch(pedirConductora())
        //   }, [dispatch])


        return (
            <div className={style.conteiner } >
                <div className='w-50 mb-5 ms-5'>
                    <h1 className='text-center'>Login</h1>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group"> {/* CORREO */}
                            <label htmlFor="exampleInputEmail1">Correo</label>
                            <input type="email" className="form-control" placeholder="Ingresar Correo" name='email' onChange={handleChange} autoComplete="false" value={formlogin.email} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='contrasena' onChange={handleChange} value={formlogin.contrasena} />
                        </div>

                        <button type="submit" className="btn btn-primary" /*onClick={handleClickEntrar}*/>Entrar</button>



                    </form>

                    {/* <div className='text-center '>

                <Link to='/resetPassword' style={{
                    color: '#0066ff',
                    textDecoration: 'none',
                    margin: '5px',
                    fontWeight: 'bold'

                }} >
                    ¿ Olvidaste tu contraseña ?
                </Link>
            </div> */}





                </div>
            </div>
        )
    }