import React,{useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { darBajaConductoras, limpiarDetalle, obtenerConductora } from '../../../actions/administrador';



const DarBajaConductora = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const detalle = useSelector(state => state.adminReducer.detalle);

    useEffect(() => {
        dispatch(obtenerConductora(id))
        return () => {
            dispatch(limpiarDetalle())
        }
    }, [dispatch, id]);

    const darBajaConductora = () => {
        const confirmar = window.confirm("¿Estas seguro que deseas dar de baja este Usuario?")
        if(confirmar){
            dispatch(darBajaConductoras(id));
            navigate('../admin/usuarios');
        }
        
    };



    return (

        <>
            {
               <div>
               <h3>{detalle.nombre}</h3>
               <ul>
                   <li><img src={detalle.fotoPerfil} alt={'fotoPerfil'}/></li>
                   <li>{detalle.usuario}</li>
                   <li>{detalle.email}</li>
                   <li>{detalle.pais}</li>
                   <li>{detalle.provincia}</li>
                   <li>{detalle.localidad}</li>
                   <li>{detalle.direccion}</li>
                   <li>{detalle.telefono}</li>
               </ul>
               <h3>
                   Detalle Automovil
               </h3>
               <ul>
                   <li>{detalle.automovil}</li>
                   <li>{detalle.patente}</li>
                   <li>{detalle.seguro}</li>
                   <li>{detalle.habilitacion}</li>
               </ul>
               <button onClick={darBajaConductora}>Dar baja</button>
               </div> 

            }
        </>
    )
}

export default DarBajaConductora