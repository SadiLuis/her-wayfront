import React, { useState, useEffect , useCallback } from 'react'

import Navbar from '../Landing/Navbar'
import './PerfilPasajera.css'
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux'
import { getPasajera ,logout , deletePasajera} from '../../actions/Usuarios'
import {Loader} from '../Loader/Loader'
import {saveImages} from '../../Helpers/saveImage'
import Swal from "sweetalert2";
import {FaCamera } from "react-icons/fa";


export default function PerfilPasajera() {

    const pasajera = useSelector(state => state.LoginRegisReducer.usuariaLogueada)
    const [imagen , setImagen] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(pasajera)
    useEffect(()=>{
	
	dispatch(getPasajera())
    
    },dispatch, imagen)

  const handleButton = () => {
      dispatch(logout())
      navigate('/home')
  }
  const handleDelete = ()=> {
    Swal.fire({
        title: 'Estás segura?',
        text: "Se eliminará toda la información!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(deletePasajera(pasajera[0]?.id))
			
            navigate('/home')
          Swal.fire(
            'Deleted!',
            'Su cuenta ha sido eliminada.',
            'success'
          )

        }
      })
  }

  const onDrop = useCallback(async(oFile) => {
    
     console.log(oFile)
     const urlImage = await saveImages(oFile[0]);
      console.log(urlImage)
       setImagen(urlImage)
    
}, []);

const { getRootProps, getInputProps} = useDropzone({
    accept: "image/jpeg",
    noKeyboard: true,
    multiple: false,
    onDrop
});
  
    return (


    <div class="container d-flex align-items-center justify-content-center vh-100" >
   {pasajera.length ? ( <div class="row">
        <div class="main-content" id='mainContainer'>
           
         <div class="tab-content profile-page" >
        		<button onClick={handleButton}>logout </button>
        		<div class="container bootstrap snippets bootdey">
        			<div class="row">
        				<div class="col-6 ">
        					<div class="user-info-left">
        						<h2>{pasajera[0].nombre} <i class="fa fa-circle green-font online-icon"></i><sup class="sr-only">online</sup></h2>
        						<img class="img-responsive" src={pasajera[0].fotoPerfil} alt="Profile Picture" style={{width:'300px', height:'300px'}}/>
                            <a class='updateFoto' {...getRootProps()} className="btn btn-block btn-success"><i class="fa fa-envelope-o"></i> Actualizar foto</a>
        							<input {...getInputProps()}/>
        						<div class="contact">
        							<a className="btn btn-block btn-outline-danger" onClick={handleDelete}><i class="fa fa-envelope-o" ></i> Eliminar cuenta</a>
        							<a className="btn btn-block btn-outline-success" onClick={()=> navigate('/editPasajera')}><i class="fa fa-book" ></i> Editar perfil</a>
									<button className='btn btn-block btn-outline-success' onClick={() => navigate("/historialViajes/" + pasajera[0].id)}> Ver historial de Viajes </button>
        						</div>
        					</div>
        				</div>
        				<div class="col-12 col-xl-6 ">
        					<div class="user-info-right">
        						<div class="basic-info">
        							<h3><i class="fa fa-square"></i> Informacion básica</h3>
        							<p class="data-row">
        								<span class="data-name">Usuario</span>
        								<span class="data-value">{pasajera[0].usuario}</span>
        							</p>
        							<p class="data-row">
        								<span class="data-name">Provincia</span>
        								<span class="data-value">{pasajera[0].provincia}</span>
        							</p>
        							<p class="data-row">
        								<span class="data-name">Ciudad</span>
        								<span class="data-value">{pasajera[0].localidad}</span>
        							</p>
        							
        							
        							
        						</div>
        						<div class="basic-info">
        							<h3><i class="fa fa-square"></i> Información de contacto</h3>
        							<p class="data-row">
        								<span class="data-name">Email</span>
        								<span class="data-value">{pasajera[0].email}</span>
        							</p>
        							<p class="data-row">
        								<span class="data-name">Telefono</span>
        								<span class="data-value">{pasajera[0].telefono}</span>
        							</p>
        							<p class="data-row">
        								<span class="data-name">Dirección</span>
        								<span class="data-value">{pasajera[0].direccion}</span>
        							</p>
        						</div>
        						
        					</div>
        				</div>
        			</div>
        		</div>
        		
             </div>
        	</div>	
        </div>
   ) : <Loader />
	}
</div>
)
}

