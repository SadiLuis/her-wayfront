import React from 'react';
import { Link } from 'react-router-dom';
import styles from './VerConductorasAdmin.module.css'


const VerConductorasAdmin = ({ conductoras }) => {

  
  let i = 0;
  
  return (
    <div className={styles.div} >
      <table className={styles.table} >
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Estado</th>
          <th>Detalle</th>
          <th>Dar baja usuario</th>
        </tr>

        {conductoras.map(c => (

          <tr>

            <td >{c.nombre}</td>
            <td >{c.usuario}</td>
            <td >{c.email}</td>
            {c.cuentaActiva?c.verificar ? (
              <td><Link to={`../admin/verificar/${c.id}`}>
                <button className={styles.btn__blue}>Verificar</button> 
                </Link></td>
            )
              : <td>{c.conectada ? 'Conectada' : 'No conectada'}</td>
              : <td>Cuenta dada de baja</td>
            }
            <td>
              <Link to={`../admin/${c.id}`}>
                <button className={styles.btn__green}>Ver Detalle</button>
              </Link>
            </td>
            {c.cuentaActiva?<td>
              <Link to={`../admin/darBajaConductora/${c.id}`}>
                <button className={styles.btn__red}>Dar Baja</button>
              </Link>
            </td>
            :<td></td>}
          </tr>

        )

        )}</table>
    </div>
  )
}

export default VerConductorasAdmin