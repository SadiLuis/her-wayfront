import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getPerfilConductora } from '../../actions/conductora';
import styles from './DetalleRecorrido.module.css'

const DetalleRecorrido = ({idConductora}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
   const conductora = useSelector(state => state.perfilConductoraReducer.perfilConductora)
    const cancelarViaje= () => {
        // dispatch(cancelar(idViaje));
         navigate('/mapa')
    }
    const reviews=()=>{
      navigate('/reviews')
    }

  return (
    <div className={styles.card__perfil}>
        <img src={conductora.fotoPerfil} alt='Foto perfil' className={styles.img__perfil} />
        <section className={styles.data__perfil}>
        <p>{conductora.nombre}</p>
        <p>Auto</p>
        <p>Modelo de auto: {conductora.automovil}</p>
        <p>Patente:{conductora.patente}</p>
        <p>Habilitación:{conductora.habilitacion}</p>
        </section>

        <button className={styles.button__perfil} onClick={cancelarViaje}>Cancelar Viaje</button>
    </div>
  )
}


export default DetalleRecorrido
