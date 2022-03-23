import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getPerfilConductora } from '../../actions/conductora'
import { useParams } from 'react-router';
import Image from '../../Media/placeholder.png'
import Navbar from '../Landing/Navbar'
import { useNavigate } from "react-router-dom";
import './PerfilConductora.css'

function PerfilConductora({ conductora, getConductora }) {

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    const { id } = useParams()

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
        <div>
            <div className='perfilCard'>
                <div className='upperContainer'>
                    <div className='imageContainer'>
                        <img src={Image}
                            alt='profile pic'
                            height='100%'
                            width='100px' />
                        <h1 className='usuario'> Usuario: marian123 </h1>
                        {/* <h1> Usuario: {conductora?.usuario} </h1> */}
                        {/* <div style={{ cursor: 'pointer' }}>
                    {/* </div> */}
                        <span className='lowerContainer'>
                            <h2> Nombre: Mariana </h2>
                            <h4> E-mail: mariana@gmail.com </h4>
                            <h4> País: Argentina </h4>
                            <h4> Teléfono: 1735175137 </h4>
                            <h4> Provincia: Cordoba </h4>
                            <h4> Localidad: Ciudad Cordoba </h4>
                            <br />
                            <h2>Info Vehicular</h2>
                            <h4> Automovil: Chevrolet </h4>
                            <h4> Patente: dfs123 </h4>
                            <h4> Seguro: San Cristobal </h4>
                            {/* <h4> cambiar contraseña </h4> */}
                            <br />
                            <h2>Status</h2>
                            <h4 style={{ color: 'green' }}> Conectada </h4>
                            {/* <h2> Nombre: {conductora?.nombre} </h2>
                        <h4> E-mail: {conductora?.email} </h4>
                        <h4> País: {conductora?.pais} </h4>
                        <h4> Teléfono: {conductora?.telefono} </h4>
                        <h4> Provincia: {conductora?.provincia} </h4>
                        <h4> Localidad: {conductora?.localidad} </h4>
                        <br />
                        <h2>Info Vehicular</h2>
                        <h4> Automovil: {conductora?.automovil} </h4>
                        <h4> Patente: {conductora?.patente} </h4>
                        <h4> cambiar contraseña </h4>
                        <br />
                        <h2>Status</h2>
                        <h4> {conductora?.conectada} </h4> */}
                        </span>
                        <br />
                        {/* <p className='editIcon'>Editar Perfíl</p> */}
                    </div>
                </div>
            </div >
            <button className='logoutC' onClick={() => navigate('/home')}> Log out </button>
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
