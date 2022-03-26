import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector  } from 'react-redux'
import { getPerfilConductora } from '../../actions/conductora'
import { useParams } from 'react-router';
import Image from '../../Media/placeholder.png'
import Navbar from '../Landing/Navbar'
import { useNavigate } from "react-router-dom";
import './PerfilConductora.css'

export default function PerfilConductora( ) {

    // const [loading, setLoading] = useState(true);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    let conductora = useSelector((state) => state.perfilConductoraReducer.perfilConductora)
    console.log("perfil conductora", conductora)

    const { id } = useParams()

    // let idConductora = "OOSg1YJ93xwIXqmviPg5"

    useEffect(() => {
       dispatch(getPerfilConductora(id))

    }, [])



    return (
        <div>
            <div className='perfilCard'>
                <div className='upperContainer'>
                    <div className='imageContainer'>
                        <img src={conductora?.fotoPerfil}
                            alt='profile pic'
                            height='100%'
                            width='100px' />
                        <h1 className='usuario' > Usuario: {conductora?.usuario} </h1>
                        {/* <div style={{ cursor: 'pointer' }}>
                    {/* </div> */}
                        <span className='lowerContainer'>
                            <h2> Nombre: {conductora?.nombre} </h2>
                        <h4> E-mail: {conductora?.email} </h4>
                        <h4> País: {conductora?.pais} </h4>
                        <h4> Teléfono: {conductora?.telefono} </h4>
                        <h4> Provincia: {conductora?.provincia} </h4>
                        <h4> Localidad: {conductora?.localidad} </h4>
                        <br />
                        <h2>Info Vehicular</h2>
                        <h4> Automovil: {conductora?.automovil} </h4>
                        <h4> Patente: {conductora?.patente} </h4>
                        <h4> Habilitación: {conductora?.habilitacion} </h4>
                        {/* <h4> cambiar contraseña </h4> */}
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

// export default connect(
//     state => ({
//         conductora: state.perfilConductoraReducer.perfilConductora
//     }),
//     dispatch => ({
//         getConductora: (idConductora) => dispatch(getPerfilConductora(idConductora))
//     })
// )(PerfilConductora)
