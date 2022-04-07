import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pedirConductora,detalleConductora, conductorasConectadas,filtrarPorMascotas, filtrarPorCochecitos  } from '../actions/conductora';
import TarjetaConductora from '../Screens/TarjetaConductora';
import {Loader} from './Loader/Loader'
import {getPasajeras} from '../actions/Usuarios'
 import styles from "./PedirConductora.module.css"
import { Link } from 'react-router-dom';

import Swal from "sweetalert2";
import NavBar from "../Components/Landing/Navbar"
import {MdStroller} from "react-icons/md";
import {FaDog} from "react-icons/fa"

 
export default function PedirConductora() {
    const dispatch= useDispatch();
    const conductoras= useSelector((state) =>state.pedirConductoraReducer.conductoras);
    const conectadas=useSelector((state)=>state.pedirConductoraReducer.conductorasConectadas)
    // const detalle= useSelector((state)=>state.pedirConductoraReducer.detalle);
   // const pasajera = useSelector(state => state.LoginRegisReducer.pasajera)
    
    console.log(conectadas)
  //const conductorasFilter = conductoras?.filter(cond => cond.localidad === pasajera[0].localidad)
    // console.log(conductorasFilter)

    

  useEffect(()=>{
    dispatch(conductorasConectadas())
    
  }, [dispatch])
  
   function handleSubmitPedirConductora(e){
     e.preventDefault();
     Swal.fire({
       Title: "Ahora puedes elegir la conductora",
       text: "Cuando la hayas elegido, haz click en Solicitar Conductora",
       icon: "success"

     })
   }

   function handleClick(e){
     e.preventDefault();
     let payload= e.target.value;
     dispatch(filtrarPorMascotas(payload))
   }
   function handleClickCochecitos(e){
    e.preventDefault();
    let payload= e.target.value;
    dispatch(filtrarPorCochecitos(payload))
  }
  
    function traertodasconectadas(e){
      e.preventDefault();
      dispatch(conductorasConectadas())
    }
    return (

         <div className='container '>
            <NavBar/>
            <br />
            <br />
            <br />
           <span>{handleSubmitPedirConductora}</span>  
          <div className='container d-flex   align-items-center justify-content-center vh-50'>
            <div className='row'> 
            <div className="col ">
                <h2 >Seleccioná:</h2>
              <div className={styles.filtros}>

                <div className={styles.mascotas}> 
                  <h4>Llevás mascotas?<FaDog></FaDog></h4>
             
              <div className={styles.uno}>
              <input onChange={handleClick} type="radio" name="aceptaMacotas" value="true" id="true"></input>
              <label for="true">Llevo mascota</label>
              </div>
              <div className={styles.dos}>
             <input onChange={handleClick} type="radio" name="aceptaMacotas" value="false" id="false"></input>
             <label for="false">No llevo mascota </label>
             </div>
             
              
              </div>
              
              <div className={styles.cochecitos}>
                <h4>Llevás cochecito?<MdStroller></MdStroller></h4>
                <div className={styles.uno}>
                <input onChange={handleClickCochecitos} type="radio" name="aceptaCochecito" value="true"></input>
                
                <label for="true">Llevo cochecito</label>
                </div>
                <div className={styles.dos}>
              <input onChange={handleClickCochecitos} type="radio" name="aceptaCochecito" value="false"></input>
              <label for="false">No llevo cochecito</label>
              </div>
              
              
              
              </div>
              
              <button type="button" className="btn btn-outline-success" onClick={traertodasconectadas} >Traer todas las conductoras disponibles</button>
              </div>



          { conectadas.length ? (
          <><div>
                
                  {conectadas?.map(elem => {
                    return (

                      <TarjetaConductora
                        key={elem.id}
                        id={elem.id}
                        fotoPerfil={elem.fotoPerfil}
                        nombre={elem.nombre}
                        localidad={elem.localidad}
                        automovil={elem.automovil}
                        patente={elem.patente}
                        telefono={elem.telefono}
                         />
                    );
                  })}
                </div>
                
                 {/* <div className="col-sm-6 col-xl-4 ">
                    <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
                  </div>  */}
                 </>
                     
       ) : <Loader />
      }
      </div>
      </div>
       </div>
       
     </div>

  
      
    )
  }
