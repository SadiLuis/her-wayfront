import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarAdmin.module.css';

const NavbarAdmin = () => {
  return (
    <div className={styles.admin}>
    <nav>
        <ul>
            <li><Link to={`../admin/usuarios`}>Ver Conductoras</Link> </li>
            <li><Link to={`../admin/pasajeras`}>Ver Pasajeras</Link></li>
            <li><Link to={`../admin/altaAdmins`}>Dar Alta Admins</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default NavbarAdmin