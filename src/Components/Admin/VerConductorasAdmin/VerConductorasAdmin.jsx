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
          <th>Estado</th>
          <th>Detalle</th>
          <th>Dar baja usuario</th>
        </tr>

        {conductoras.map(c => (

          <tr>

            <td >{c.nombre}</td>
            <td >{c.usuario}</td>
            <td >{c.email}</td>
            {c.verificar ? (
              <td><Link to={`../admin/verificar/${c.id}`}>
                <button>Verificar</button> 
                </Link></td>
            )
              : <td>{c.conectada ? 'Conectada' : 'No conectada'}</td>
            }
            <td>
              <Link to={`../admin/${c.id}`}>
                <button>Ver Detalle</button>
              </Link>
            </td>
            <td>
              <Link to={`../admin/darBajaConductora/${c.id}`}>
                <button>Dar Baja</button>
              </Link>
            </td>
          </tr>

        )

        )}</table>
    </div>
  )
}

export default VerConductorasAdmin