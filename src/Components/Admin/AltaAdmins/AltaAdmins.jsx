import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { darAltaAdmin } from '../../../actions/administrador';
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin';
import styles from './AltaAdmins.module.css'

const AltaAdmins = () => {

    const [admin, setAdmin] = useState({
        email: "",
        contrasena: ""
    }) 
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(admin)
        dispatch(darAltaAdmin(admin)); 
    }

    const handleChange= (e) => {
        setAdmin({
            ...admin,
            [e.target.name] : e.target.value
        })
    } 

    return (
        <div className={styles.container__main}>
            <NavbarAdmin />
            <div>
                <h3>Dar de alta un administrador</h3>
                <form onSubmit={handleSubmit} className={styles.container__form}>
                    <label>Email:</label>
                    <input type="text" name="email" value={admin.email} id="email" onChange={handleChange}/>
                    <label >Contraseña:</label>
                    <input type="password" name="contrasena" value={admin.contrasena} onChange={handleChange} id="contrasena" />
                    <button type="submit">Dar Alta</button>
                </form>
            </div>
        </div>
    )
}

export default AltaAdmins