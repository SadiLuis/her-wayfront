import React from 'react'
import Image from '../../Media/placeholder.png'
import Navbar from '../Landing/Navbar'
import './Perfil.css'

function PerfilPasajera() {



    return (
        <div className='perfilCard'>
            <div className='upperContainer'>
                <icon className='editIcon'>Editar Perfíl</icon>
                <div className='imageContainer'>
                    <img src={Image}
                        alt='profile pic'
                        height='100%'
                        width='100px' />
                    <h1> usuario </h1>
                    {/* <div style={{ cursor: 'pointer' }}>
                    {/* </div> */}
                    <span className='lowerContainer'>
                        <h2> nombre </h2>
                        <h4> pais </h4>
                        <h4> email </h4>
                        <h4> telefono </h4>
                        <h4> provincia </h4>
                        <h4> localidad </h4>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PerfilPasajera
