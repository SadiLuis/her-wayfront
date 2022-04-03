import React, { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { getPerfilConductora, pedirConductora } from '../../actions/conductora'
//import Image from '../../Media/placeholder.png'
//import Navbar from '../Landing/Navbar'
import { useNavigate, useParams, Link } from "react-router-dom";
import './PerfilConductora.css'




export default function PerfilConductora( ) {
    // const [loading, setLoading] = useState(true);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const conductora = useSelector((state) => state.perfilConductoraReducer.detailConduc)
    const idConductoraLogueada = useSelector((state) => state.registroConductoraReducer.conducLogueada)
    const {id} = useParams()
    
    useEffect(() => {
        dispatch(pedirConductora())
        dispatch(getPerfilConductora(id))
    }, [id ])


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
                        <h4> País: {idConductoraLogueada[0].pais} </h4>
                        <h4> Teléfono: {idConductoraLogueada[0].telefono} </h4>
                        <h4> Provincia: {idConductoraLogueada[0].provincia} </h4>
                        <h4> Localidad: {idConductoraLogueada[0].localidad} </h4>
                        <br />
                        <h2>Info Vehicular</h2>
                        <h4> Automovil: {idConductoraLogueada[0].automovil} </h4>
                        <h4> Patente: {idConductoraLogueada[0].patente} </h4>
                        <h4> Habilitación: {idConductoraLogueada[0].habilitacion} </h4>
                        {/* <h4> cambiar contraseña </h4> */}
                        </span>
                        <br />
                        {/* <p className='editIcon'>Editar Perfíl</p> */}
                    </div>
                </div>
            </div>
            <button className='logoutC' onClick={() => navigate('/home')}> Log out </button>
            <div>
            <button className='logoutD' onClick={() => navigate('/homeConductora')}> Volver </button>                       
        
        </div>
        </div>
        
    )
};
