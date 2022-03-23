import React from 'react';
//  import GoogleMapReact from 'google-map-react';
//   import Directions from 'google-maps-direction'
import {FaRegDotCircle,FaMapMarkerAlt, FaDirections} from 'react-icons/fa';
import styles from './OrigenDestino.module.css'
 import Mapa from './Mapa'


export default function OrigenDestino() {
    //          //setear las opciones del mapa 

// var mylatlng={lat:38.3460, lng:-0.4907};
// var mapOptions={
//     center:mylatlng,
//     zoom:7,
//     mapTypeId:google.maps.mapTypeId.ROADMAP
// }

// //crear el mapa

// var map=new google.maps.Map(document.getElementById("googleMap"), mapOptions)

// //crea service Direction para usar el método route y conseguir un resultado

// var direccionService= new google.maps.DirectionService();
 
// //crear renderizado de direcciones que vamos a usar para mostrar las rutas
// var direccionesMostrar= new google.maps.DirectionsRenderer();

// //bindea la direcciónMostrar
// direccionesMostrar.setMap(map);

  return (
    <div className='jumbotron'>
        <div className='container-fluid'>
            <h1>Calcula la distancia entre dos lugares</h1>
            
            <form className='form-horizontal'>
                <div className='form-group'>
                    <label for="desde" className='col-x-2 control label'  > <FaRegDotCircle></FaRegDotCircle></label>
                    <div className='col-xs-4'>
                        <input 
                        type="text" id="desde" placeholder='Origen' 
                        className='form-control'>
                        </input>

                    </div>

                </div>

                <div className='form-group'>
                    <label for="hacia" className='col-x-2 control label'  > <FaMapMarkerAlt></FaMapMarkerAlt></label>
                    <div className='col-xs-4'>
                        <input 
                        type="text" id="hacia" placeholder='Destino' 
                        className='form-control'>
                        </input>

                    </div>

                </div>

            </form>
            <div className='col-xxs-offset-2 col-xs-10'>
                <button className={styles.botonDireccion} 
            
                ><FaDirections></FaDirections></button>

            </div>

        </div>
        <div className='container-fluid'>
            <div id="googleMap">

            </div>
            <div id="output">

            </div>
    </div>
    </div>
  )
}
