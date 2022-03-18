import React from 'react'
import s from './PerfilPasajera.module.css'

function PerfilPasajera(nombre, apellido, id, dni, telefono, email) {


  return (
  <div>
      <div className={s.dataContainer}>
        <div className={s.labelContainer}>
          <span className={s.label}>Nombre y Apellido:</span>
          <span span className={s.fullName}>{nombre + " " + apellido}</span>
        </div>
      </div>
        <div className={s.labelContainer}>
          <span className={s.label}>Email:</span>
          <span className={s.dataLabel}>{email}</span>
        </div>
        <div className={s.labelContainer}>
          <span className={s.label}>Contraseña:</span>
          <span className={s.dataLabel}>***********</span>
        </div>
        <div className={s.labelContainer}>
          <span className={s.label}>DNI:</span>
          <span className={s.dataLabel}>{dni}</span>
        </div>
        <div className={s.labelContainer}>
          <span className={s.label}>Telefono:</span>
          <span className={s.dataLabel}>{telefono}</span>
        </div>
      </div>
  
  );


}


export default PerfilPasajera