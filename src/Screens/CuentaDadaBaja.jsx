import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './CuentaDadaBaja.module.css'

const CuentaDadaBaja = () => {
    const navigate = useNavigate()
    const regresarHome = () => {
        navigate('../loginConductora')
    }
  return (
    <div className={style.container__msg}>
    <div class="alert alert-danger w-25" >
        <p>Cuenta Suspendida por favor comuniquese con nosotros</p>
        <button onClick={regresarHome}>Regresar</button>
    </div>
    </div>
    
  )
}

export default CuentaDadaBaja