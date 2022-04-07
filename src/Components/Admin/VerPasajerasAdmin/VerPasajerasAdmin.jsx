import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPasajeras } from '../../../actions/administrador';
import styles from './VerPasajerasAdmin.module.css'

import NavbarAdmin from '../NavbarAdmin/NavbarAdmin'

const VerPasajerasAdmin = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerPasajeras())
  }, [dispatch])

  const pasajeras = useSelector(state => state.adminReducer.pasajeras)
  console.log(pasajeras)
  return (
    <div className={styles.container__main}>
      <NavbarAdmin />
      <table className={styles}>
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Dirección</th>
          <th>Pais</th>
          <th>Provincia</th>
          <th>Localidad</th>
          <th>Teléfono</th>
        </tr>

        {pasajeras.map(p => (



          <tr>
            <td >{p.nombre}</td>
            <td >{p.usuario}</td>
            <td >{p.email}</td>
            <td >{p.direccion}</td>
            <td >{p.pais}</td>
            <td >{p.provincia}</td>
            <td >{p.localidad}</td>
            <td >{p.telefono}</td>
          </tr>

        )

        )}
      </table>
    </div>
  )
}

export default VerPasajerasAdmin