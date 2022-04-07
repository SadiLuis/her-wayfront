import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './VerificarConductora.module.css'
const VerificarConductora = () => {
    const navigate = useNavigate()
    const regresarHome = () => {
        navigate('../loginConductora')
    }
  return (
      <div className={style.container__msg}>
    <div class="alert alert-info w-25" >
        <p>Estamos verificando sus datos, nos comunicaremos a la brevedad mediante su correo .</p>
        <button onClick={regresarHome}>Regresar</button>
    </div>
    </div>
  )
}

export default VerificarConductora