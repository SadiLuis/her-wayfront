import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { darAltaAdmin } from '../../../actions/administrador';
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin'

const AltaAdmins = () => {

    const [admin, setAdmin] = useState({
        email: "",
        contrasena: ""
    }) 
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(darAltaAdmin(admin)); 
    }

    const handleChange= (e) => {
        setAdmin({
            ...admin,
            [e.target.name] : [e.target.value]
        })
    } 

    return (
        <div>
            <NavbarAdmin />
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" name="email" id="email" onChange={handleChange}/>
                <label >Contraseña:</label>
                <input type="password" name="contrasena" onChange={handleChange} id="contrasena" />
                <button type="submit">Dar Alta</button>
            </form>
        </div>
    )
}

export default AltaAdmins