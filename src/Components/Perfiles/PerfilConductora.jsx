import React, { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { getPerfilConductora, obtenerConductora } from '../../actions/conductora'
import {logoutConductora} from '../../actions/registroConductora'
import Image from '../../Media/placeholder.png'
import Navbar from '../Landing/Navbar'
import { useNavigate, useParams } from "react-router-dom";
import './PerfilConductora.css'





export default function PerfilConductora( ) {
    // const [loading, setLoading] = useState(true);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {idConductora} = useParams()
    const conductora = useSelector((state) => state.perfilConductoraReducer.perfilConductora)
    const idConductoraLogueada = useSelector((state) => state.registroConductoraReducer.conducLogueada)
    // let idConductora = "OOSg1YJ93xwIXqmviPg5"
    
    useEffect(() => {
        //dispatch(obtenerConductora(idConductora))
        dispatch(getPerfilConductora(idConductoraLogueada[0].id))
    }, [])
    const handleButton = () => {
        dispatch(logoutConductora())
        navigate('/home')
    }

    return (
        <div>
            <div className='perfilCard'>
                <div  className='upperContainer'>
                    <div className='imageContainer'>
                         <div key={idConductoraLogueada[0].id}></div> 
                        <img src={idConductoraLogueada[0].fotoPerfil}
                            alt='profile pic'
                            height='100%'
                            width='100px' />
                        <h1 className='usuario' > Conductora: {idConductoraLogueada[0].usuario} </h1>
                        {/* <div style={{ cursor: 'pointer' }}>
                    {/* </div> */}
                        <span className='lowerContainer'>
                        <h2> Nombre: {idConductoraLogueada[0].nombre} </h2>
                        <h2> Apellido: {idConductoraLogueada[0].apellido} </h2>
                        <h4> E-mail: {idConductoraLogueada[0].email} </h4>
                        <h4> Pa??s: {idConductoraLogueada[0].pais} </h4>
                        <h4> Tel??fono: {idConductoraLogueada[0].telefono} </h4>
                        <h4> Provincia: {idConductoraLogueada[0].provincia} </h4>
                        <h4> Localidad: {idConductoraLogueada[0].localidad} </h4>
                        <br />
                        <h2>Info Vehicular</h2>
                        <h4> Autom??vil: {idConductoraLogueada[0].automovil} </h4>
                        <h4> Patente: {idConductoraLogueada[0].patente} </h4>
                        <h4> Habilitaci??n: {idConductoraLogueada[0].habilitacion} </h4>
                        {/* <h4> cambiar contrase??a </h4> */}
                        </span>
                        <br />
                            <button className='logoutC' onClick={() => navigate('/home')}> Log out </button>
                            <button className='volver' onClick={() => navigate('/homeConductora')}> Volver </button>
                        {/* <p className='editIcon'>Editar Perf??l</p> */}
                    </div>
                </div>
            </div>
                            <button className='btn btn-block btn-outline-success' onClick={() => navigate("/historialConductoraViajes/" + idConductoraLogueada[0].id)}> Ver historial de viajes </button>

        </div>
    )
};