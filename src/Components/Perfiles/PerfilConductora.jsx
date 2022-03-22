import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getPerfilConductora } from '../../actions/conductora'
import Image from '../../Media/placeholder.png'
import Navbar from '../Landing/Navbar'
import './PerfilConductora.css'

function PerfilConductora({ conductora, getConductora, id }) {

    const [loading, setLoading] = useState(true);

    useEffect((id) => {
        if (conductora) {
            return
        }
        getConductora(id)

    }, [conductora, getConductora, id])

    useEffect(() => {
        if (conductora) {
            setLoading(false)
        }
    }, [conductora])

    return (
        <div className='perfilCard'>
            <div className='upperContainer'>
                <icon className='editIcon'>Editar Perfíl</icon>
                <div className='imageContainer'>
                    <img src={Image}
                        alt='profile pic'
                        height='100%'
                        width='100px' />
                    <h1> {conductora.usuario} </h1>
                    {/* <div style={{ cursor: 'pointer' }}>
                    {/* </div> */}
                    <span className='lowerContainer'>
                        <h2> {conductora.nombre} </h2>
                        <h4> {conductora.email} </h4>
                        <h4> {conductora.pais} </h4>
                        <h4> {conductora.telefono} </h4>
                        <h4> {conductora.provincia} </h4>
                        <h4> {conductora.localidad} </h4>
                        <br />
                        <h2>Info Vehicular</h2>
                        <h4> {conductora.automovil} </h4>
                        <h4> {conductora.patente} </h4>
                        <h4> cambiar contraseña </h4>
                        <br />
                        <h2>Status</h2>
                        <h4> {conductora.conectada} </h4>
                    </span>
                </div>
            </div>
        </div >
    )
}

export default connect(
    state => ({
        conductora: state?.perfilConductora
    }),
    dispatch => ({
        getConductora: (id) => dispatch(getPerfilConductora(id))
    })
)(PerfilConductora)
