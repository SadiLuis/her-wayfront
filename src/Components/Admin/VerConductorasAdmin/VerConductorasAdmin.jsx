import React from 'react';
import { Link } from 'react-router-dom';


const VerConductorasAdmin = ({ conductoras }) => {

  let i = 0;

  return (
    <div>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Detalle</th>
          <th>Borrar Usuario</th>
        </tr>

        {conductoras.map(c => (
         
          <tr>
            
              <td >{c.nombre}</td>
              <td >{c.usuario}</td>
              <td >{c.email}</td>
            
              <Link to={`../admin/${c.id}`}><td><button>Ver Detalle</button></td></Link>
              <td><button>Borrar Usuario</button></td>
          </tr>
          
        )

        )}</table>
    </div>
  )
}

export default VerConductorasAdmin