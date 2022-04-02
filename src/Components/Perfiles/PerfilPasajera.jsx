import React, { useState, useEffect , useCallback } from 'react'
import { connect } from 'react-redux'
import Image from '../../Media/placeholder.png'
import Navbar from '../Landing/Navbar'
import './PerfilPasajera.css'
import { useDropzone } from "react-dropzone";
import { Link,useNavigate } from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux'
import {getPasajeras , logout} from '../../actions/Usuarios'
import {Loader} from '../Loader/Loader'
import {saveImages} from '../../Helpers/saveImage'
import {updateFoto} from '../../actions/Usuarios'

export default function PerfilPasajera() {
    const pasajera = useSelector(state => state.LoginRegisReducer.pasajera)
    const [imagen , setImagen] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(pasajera)
    useEffect(()=>{
       dispatch(getPasajeras())
    },[dispatch], imagen)

  const handleButton = () => {
      dispatch(logout())
      navigate('/home')
  }
  const onDrop = useCallback(async(oFile) => {
    
      console.log(oFile)
     const urlImage = await saveImages(oFile[0]);
      console.log(urlImage)
      setImagen(urlImage)
      await updateFoto(urlImage , pasajera[0].id)
}, []);

const { getRootProps, getInputProps} = useDropzone({
    accept: "image/jpeg",
    noKeyboard: true,
    multiple: false,
    onDrop
});
  
    return (
         
        
        <><div className='perfilCard'>
            {pasajera.length ?
                (<div className='upperContainer'>

                    <div className='imageContainer'>
                        <img src={pasajera[0].fotoPerfil ? pasajera[0].fotoPerfil : imagen ? imagen : Image}
                            alt='profile pic'
                            height='100%'
                            width='100px' />
                        {/*  <h1 className='usuario'> Usuario: lolo </h1>
             <span className='lowerContainer'>
                 <h2> Nombre: Lorena </h2>
                 <h4> E-mail: lorena@gmail.com </h4>
                 <h4> País: Arg </h4>
                 <h4> Teléfono: 55599966 </h4>
                 <h4> Provincia: Form </h4>
                 <h4> Localidad: Fsa </h4> */}
                        {/* </div> */}
                        <div style={{ cursor: 'pointer' }}>
                            <span className='lowerContainer'>
                                <h1> Usuario: {pasajera[0].usuario} </h1>
                                <h2> Nombre: {pasajera[0].nombre} </h2>
                                <h4> E-mail: {pasajera[0].email} </h4>
                                <h4> País: {pasajera[0].pais} </h4>
                                <h4> Teléfono: {pasajera[0].telefono} </h4>
                                <h4> Provincia: {pasajera[0].provincia} </h4>
                                <h4> Ciudad: {pasajera[0].localidad} </h4>
                                <h4>Dirección: {pasajera[0].direccion}</h4>
                            </span>
                            
                        </div>
                    </div>
                       

                    <Link to='/editPasajera'>
                        Editar
                    </Link>
                    <button {...getRootProps()} primary>Actualizar foto </button>
                    <input {...getInputProps()} />
                    <button className='logoutP' onClick={handleButton}> Salir </button>
                    
                    </div>
                

                ) : <Loader />}
        </div>
                </>
    )
}
