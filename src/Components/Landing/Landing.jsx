import React from 'react';
import './Landing.css';
import MujerPasajera from '../../Media/MujerPasajera.JPG'
import MujerLibre from '../../Media/mujerLibre.JPG'
import PulgarArriba from '../../Media/pulgarArriba.JPG'
import Slider from './Slider';
import Navbar from './Navbar';

const Landing = () => {
    return (
        <div>
            <Navbar />
            <div className='mujerPasajera'>
                <img src={MujerPasajera} alt='mujerPasajera' className='mujerPasajera_image' />
                <p className='primerTexto'>Tu seguridad es primero. </p>
            </div>
            <div>
                <Slider imageSrc={MujerLibre} title={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'} />
                <Slider imageSrc={PulgarArriba} title={'Ut enim ad minima veniam, quis nostrum exercitationem'} flipped={true} />
            </div>
        </div>
    )
}

export default Landing