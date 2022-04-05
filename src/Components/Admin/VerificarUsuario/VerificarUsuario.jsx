import React,{useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { limpiarDetalle, obtenerConductora, verificarConductora } from '../../../actions/administrador';
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin';
import styles from './VerificarUsuario.module.css'
//import imgDni from '../../../assets/nuevo-dni-ejemplo.jpg';


const VerificarConductora = () => {
    const { id } = useParams();

    const navigate =useNavigate();
    const dispatch = useDispatch();

    const detalle = useSelector(state => state.adminReducer.detalle);

    useEffect(() => {
        dispatch(obtenerConductora(id))
        return () => {
            dispatch(limpiarDetalle())
        }
    }, [id]);

    const confirmarVerificacion = (ev) => {
        const confirmar = window.confirm("¿Estas seguro que deseas verificar este Usuario?")
        if(confirmar){
            dispatch(verificarConductora(id));
            navigate('../admin/usuarios');
        }
    }



    return (<>
        <NavbarAdmin />
        <div className={styles.cards__container}>
            <div className={styles.card}>
                <header className={styles.card__header}>
                    <img src={detalle.fotoPerfil} alt={'fotoPerfil'} className={styles.card__headerProfile} />
                </header>
                <section className={styles.card__body}>
                    <h3>{detalle.nombre}</h3>

                    <p className={styles.card__text}>Usuario: 
                        <span>{detalle.usuario}</span>
                    </p>
                    <p className={styles.card__text}>Email: 
                        <span>{detalle.email}</span></p>
                    <p className={styles.card__text}>Pais: 
                        <span>{detalle.pais}</span></p>
                    <p className={styles.card__text}>Provincia:
                    <span>{detalle.provincia}</span></p>
                    <p className={styles.card__text}>Localidad: 
                    <span>{detalle.localidad}</span></p>
                    <p className={styles.card__text}>Direccion: 
                    <span>{detalle.direccion}</span></p>
                    <p className={styles.card__text}>Telefono: 
                    <span>{detalle.telefono}</span></p>

                </section>
            </div>
           
            <img src={detalle.fotoDni}/>
               
               <button onClick={confirmarVerificacion} className={styles.btn__blue}>Verificar</button>
        </div>
    </>

        
               
               

         
    )
}

export default VerificarConductora