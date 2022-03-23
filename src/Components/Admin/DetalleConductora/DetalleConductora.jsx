import React,{useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { limpiarDetalle, obtenerConductora } from '../../../actions/administrador';



const DetalleConductora = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const detalle = useSelector(state => state.adminReducer.detalle);

    useEffect(() => {
        dispatch(obtenerConductora(id))
        return () => {
            dispatch(limpiarDetalle())
        }
    }, [dispatch, id]);



    return (

        <>
            {
               <div>
               <h3>{detalle.nombre}</h3>
               <ul>
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
               </div> 

            }
        </>
    )
}

export default DetalleConductora