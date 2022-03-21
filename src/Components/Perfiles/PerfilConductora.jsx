import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Image from '../../Media/placeholder.png'
import Navbar from '../Landing/Navbar'
import './Perfil.css'

function PerfilConductora({ getPerfil }) {

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     if (getPerfil) {
    //         setLoading(false)
    //     }
    // }, [getPerfil, id])

    return (
        <div className='perfilCard'>
            <div className='upperContainer'>
                <icon className='editIcon'>Editar Perfíl</icon>
                <div className='imageContainer'>
                    <img src={Image}
                        alt='profile pic'
                        height='100%'
                        width='100px' />
                    <h1> {getPerfil.usuario} </h1>
                    {/* <div style={{ cursor: 'pointer' }}>
                    {/* </div> */}
                    <span className='lowerContainer'>
                        <h2> {getPerfil.nombre} </h2>
                        <h4> {getPerfil.email} </h4>
                        <h4> {getPerfil.pais} </h4>
                        <h4> {getPerfil.telefono} </h4>
                        <h4> {getPerfil.provincia} </h4>
                        <h4> {getPerfil.localidad} </h4>
                        <br />
                        <h2>Info Vehicular</h2>
                        <h4> {getPerfil.automovil} </h4>
                        <h4> {getPerfil.patente} </h4>
                        <h4> cambiar contraseña </h4>
                        <br />
                        <h2>Status</h2>
                        <h4> conectada </h4>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        getPerfil: state?.getPerfilConductora
    }),

)(PerfilConductora)
