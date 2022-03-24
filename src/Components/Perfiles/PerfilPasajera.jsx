import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Image from '../../Media/placeholder.png'
import Navbar from '../Landing/Navbar'
import './PerfilPasajera.css'
import { useNavigate } from "react-router-dom";


export default function PerfilPasajera() {

    const navigate = useNavigate()

    return (
        <div className='perfilCard'>
            <div className='upperContainer'>
                {/* <span className='editIcon'>Editar Perfíl</span> */}
                <div className='imageContainer'>
                    <img src={Image}
                        alt='profile pic'
                        height='100%'
                        width='100px' />
                    <h1 className='usuario'> Usuario: lolo </h1>
                    <span className='lowerContainer'>
                        <h2> Nombre: Lorena </h2>
                        <h4> E-mail: lorena@gmail.com </h4>
                        <h4> País: Arg </h4>
                        <h4> Teléfono: 55599966 </h4>
                        <h4> Provincia: Form </h4>
                        <h4> Localidad: Fsa </h4>
                        {/* <h1> Usuario: {pasajera.usuario} </h1> */}
                        {/* <div style={{ cursor: 'pointer' }}>
                    {/* </div> */}
                        {/* <span className='lowerContainer'>
                        <h2> Nombre: {pasajera.nombre} </h2>
                        <h4> E-mail: {pasajera.email} </h4>
                        <h4> País: {pasajera.pais} </h4>
                        <h4> Teléfono: {pasajera.telefono} </h4>
                        <h4> Provincia: {pasajera.provincia} </h4>
                        <h4> Localidad: {pasajera.localidad} </h4> */}
                    </span>
                </div>
            </div>
            <button className='logoutP' onClick={() => navigate('/home')}> Log out </button>
        </div>
    )
}

// export default connect(
//     state => ({
//         pasajera: state?.perfilPasajera
//     }),
//     dispatch => ({
//         getPasajera: (id) => dispatch(getPerfilPasajera(id))
//     })
// )(PerfilPasajera)
