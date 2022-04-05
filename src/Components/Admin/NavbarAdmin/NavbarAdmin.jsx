import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cerrarSesion } from '../../../actions/administrador';
import styles from './NavbarAdmin.module.css';

const NavbarAdmin = () => {

  const dispatch = useDispatch();
  const terminarSesion = () => {
    dispatch(cerrarSesion());
  }
  return (
    <div className={styles.admin}>
    <nav>
        <ul>
            <li><Link to={`../admin/usuarios`}>
              <span>Ver Conductoras</span></Link> 
              </li>
            <li><Link to={`../admin/pasajeras`}>
              <span>Ver Pasajeras</span></Link>
              </li>
              <li><Link to={`../../misViajesPasajera`}>
              <span>Todos los Viajes</span></Link> 
              </li> 
            <li><Link to={`../admin/altaAdmins`}>
              <span>Dar Alta Admins</span></Link>
              </li>
             <li><Link to={`../admin`} onClick={terminarSesion}><span>Cerrar Sesion</span></Link></li>
             
        </ul>
    </nav>
    </div>
  )
}

export default NavbarAdmin