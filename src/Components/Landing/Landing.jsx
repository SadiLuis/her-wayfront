import React from 'react';
import './Landing.css';

const Landing = ({ imageSrc }) => {
    return (
        <div className='mujerPasajera'>
            <img src={imageSrc} alt='mujerPasajera' className='mujerPasajera_image' />
            <p className='primerTexto'>Tu seguridad es primero. </p>
        </div>
    )
}

export default Landing