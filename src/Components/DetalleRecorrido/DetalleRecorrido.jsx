import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getPerfilConductora } from '../../actions/conductora';
import { cancelarViaje } from '../../actions/recorrido';
import styles from './DetalleRecorrido.module.css'

const DetalleRecorrido = ({conductora}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
   
    const idViaje = useSelector(state=>state.recorridoReducer.viaje._path.segments[1])
    //console.log(idViaje)
    const cancelar= () => {
        dispatch(cancelarViaje(idViaje));
         navigate('/mapa')
    }
  return (
    <div className={styles.card__perfil}>
        <img src={conductora.fotoPerfil} alt='Foto perfil' className={styles.img__perfil}/>
        <section className={styles.data__perfil}>
        <p className={styles.descripcion__perfil}>{conductora.nombre}</p>
        <p className={styles.descripcion__perfil}>{conductora.automovil}</p>
        <p className={styles.descripcion__perfil}>{conductora.patente}</p>

        </section>
        
        <button className={styles.button__perfil} onClick={cancelar}>Cancelar Viaje</button>
    </div>
  )
}

export default DetalleRecorrido