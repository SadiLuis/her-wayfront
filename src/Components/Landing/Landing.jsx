import React from 'react';
import './Landing.css';
import MujerPasajera from '../../Media/MujerPasajera.JPG'
import MujerPasajera2 from '../../Media/MujerPasajera2.JPG'
import MujerLibre from '../../Media/mujerLibre.JPG'
import PulgarArriba from '../../Media/pulgarArriba.JPG'
import Slider from './Slider';
import Navbar from './Navbar';

const Landing = () => {
    return (
        <div>
            <Navbar />
            <div className='mujerPasajera'>
                <img src={MujerPasajera2} alt='mujerPasajera' className='mujerPasajera_image' />
                <p className='primerTexto'>Mujeres cuidando a mujeres. </p>
            </div>
            <div>
                <Slider imageSrc={MujerLibre} title={'Her-Way es una app de transporte por y para nosotras.'} />
                <Slider imageSrc={PulgarArriba} title={'Se dueña de tu tiempo, trabaja con tu automovil y con toda la seguridad que necesitas.'} flipped={true} />
            </div>
        </div>
    )
}

export default Landing