import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { limpiarDetalle, obtenerConductora } from '../../../actions/administrador';
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin';
import styles from './DetalleConductora.module.css'



const DetalleConductora = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const detalle = useSelector(state => state.adminReducer.detalle);

    useEffect(() => {
        dispatch(obtenerConductora(id))
        return () => {
            dispatch(limpiarDetalle())
        }
    }, [id]);



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
            <div className={styles.card}>
                <section className={styles.card__body}>
                    <h3>
                        Detalle Automovil
                    </h3>

                    <p className={styles.card__text}>Modelo: 
                    <span>{detalle.automovil}</span>
                    </p>
                    <p className={styles.card__text}>Patente: 
                    <span>{detalle.patente}</span>
                    </p>
                    <p className={styles.card__text}>Seguro: 
                    <span>{detalle.seguro}</span>
                    </p>
                    <p className={styles.card__text}>Habilitecion: 
                    <span>{detalle.habilitacion}</span>
                    </p>
                </section>
            </div>
        </div>
    </>



    )
}

export default DetalleConductora