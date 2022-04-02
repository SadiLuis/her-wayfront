import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarAdmin.module.css';

const NavbarAdmin = () => {
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
             <li><span>Cerrar Sesion</span></li>
             
        </ul>
    </nav>
    </div>
  )
}

export default NavbarAdmin