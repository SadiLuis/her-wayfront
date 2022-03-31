import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../../actions/administrador';


const initialLogin = {
    contrasena: '',
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

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = {
            ...error,
            contrasena: '',
            email: ''
        }
        setError(errors)


        dispatch (login(formlogin))

        navigate('/admin/usuarios')
    }

    //   useEffect(()=>{
    //     dispatch(pedirConductora())
    //   }, [dispatch])

    
    return(
    <div className='col-md-4'>
        <div className='mt-5 ms-5'>
            <h1 className='text-center'>Login</h1>
            <form onSubmit={handleSubmit} >
                <div className="form-group"> {/* CORREO */}
                    <label htmlFor="exampleInputEmail1">Correo</label>
                    <input type="email" className="form-control" placeholder="Ingresar Correo" name='email' onChange={handleChange} autoComplete="false" value={formlogin.email} />
       
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='contrasena' onChange={handleChange}  value={formlogin.contrasena} />
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