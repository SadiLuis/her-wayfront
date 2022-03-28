import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getPerfilConductora } from '../../actions/conductora';
import styles from './DetalleRecorrido.module.css'

const DetalleRecorrido = ({idConductora}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getPerfilConductora())
    })

    const cancelarViaje= () => {
        // dispatch(cancelar(idViaje));
        // navigate('./')
    }
  return (
    <div className={styles.card__perfil}>
        <img src='' alt='Foto perfil' className={styles.img__perfil}/>
        <section className={styles.data__perfil}>
        <p>Nombre Conductor</p>
        <p>Auto</p>
        <p>Modelo de auto</p>

        </section>
        
        <button className={styles.button__perfil} onClick={cancelarViaje}>Cancelar Viaje</button>
    </div>
  )
}

export default DetalleRecorrido