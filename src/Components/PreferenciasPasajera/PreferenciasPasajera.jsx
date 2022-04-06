import React from 'react';
import NavBar from '../Landing/Navbar'

function PreferenciasPasajera() {
  return (
    <div className='container'>

        <NavBar/>
        <br />
        <br />
        <br />

        <div className='ccontainer d-flex   align-items-center justify-content-center vh-50'>
            <div className='row align-items-start'>
                <div className='col'>

                <label>
                    <select>
                        < option value="mascotas">Mascotas</option>
                        
                    </select>
                </label>
                <label>
                    <select>
                        < option value="cochecitos">Cochecitos/Sillas de Ruedas</option>
                        
                    </select>
                </label>

                    

                </div>

            </div>


        </div>
    </div>
  )
}

export default PreferenciasPasajera