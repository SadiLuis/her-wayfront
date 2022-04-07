import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { darAltaAdmin } from '../../../actions/administrador';
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin';
import styles from './AltaAdmins.module.css'
import Swal from 'sweetalert2';

const AltaAdmins = () => {

    const [admin, setAdmin] = useState({
        email: "",
        contrasena: ""
    }) 
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(admin)
        Swal.fire({
            title: '¿Estás por habilitar un nuevo admin?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                dispatch(darAltaAdmin(admin));
                Swal.fire(
                    '¡Habilitado!',
                    'El admin ha sido habilitado.',
                    'success'
                )
            }
        })
    }

    const handleChange= (e) => {
        setAdmin({
            ...admin,
            [e.target.name] : e.target.value
        })
    } 

  


    return (
        <div >
            <NavbarAdmin />
            <div className={styles.container}>
                <h3>Dar de alta un administrador</h3>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>Email:</label>
                    <input type="text" name="email" value={admin.email} id="email" onChange={handleChange}/>
                    <label >Contraseña:</label>
                    <input type="password" name="contrasena" value={admin.contrasena} onChange={handleChange} id="contrasena" />
                    <button type="submit" style={{
                        borderRadius: "5px",
                    }} >Dar Alta</button>
                </form>
            </div>
        </div>
    )
}

export default AltaAdmins