import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getuserDetails } from '../../actions/Usuarios'
import Image from '../../Media/placeholder.png'
import { useParams } from 'react-router';
import Navbar from '../Landing/Navbar'
import './PerfilPasajera.css'
import { useNavigate } from "react-router-dom";
import './PerfilPasajera.css'


function PerfilPasajera() {

    const navigate = useNavigate()
    // const dispatch = useDispatch()
    // let conductora = useSelector((state) => state.perfilConductoraReducer.perfilConductora)

    //const { id } = useParams()

    useEffect(() => {
        // dispatch(getPerfilPasajera(id))
 
     }, [])
 

    return (
        <div className='perfilCard'>
            <div className='upperContainer'>
                <h1>Perfil Pasajera</h1>
                <div className='imageContainer'>
                    <img src={Image}
                        alt='profile pic'
                        height='100%'
                        width='100px' />
                    {/* <h1 className='usuario'> Usuario: {pasajera.usuario} </h1> */}
                        {/* <div style={{ cursor: 'pointer' }}>
                    {/* </div> */}
                        <span className='lowerContainer'>
                        {/* <h2> Nombre: {pasajera.nombre} </h2>
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

export default connect(
    state => ({
        pasajera: state?.perfilPasajera
    }),
    dispatch => ({
        // getPasajera: (id) => dispatch(getPerfilPasajera(id))
    })
)(PerfilPasajera)
