import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPerfilConductora, obtenerConductora } from '../../actions/conductora'
import Image from '../../Media/placeholder.png'
import Navbar from '../Landing/Navbar'
import { useNavigate, useParams } from "react-router-dom";
import './PerfilConductora.css'
import { saveImages } from '../../Helpers/saveImage'
import { useDropzone } from "react-dropzone";





export default function PerfilConductora() {
    // const [loading, setLoading] = useState(true);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { idConductora } = useParams()
    const conductora = useSelector((state) => state.perfilConductoraReducer.perfilConductora)
    const idConductoraLogueada = useSelector((state) => state.registroConductoraReducer.conducLogueada)
    // let idConductora = "OOSg1YJ93xwIXqmviPg5"
    const [imagen, setImagen] = useState('')
    const onDrop = useCallback(async (oFile) => {

        console.log(oFile)
        const urlImage = await saveImages(oFile[0]);
        console.log(urlImage)
        setImagen(urlImage)

    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg",
        noKeyboard: true,
        multiple: false,
        onDrop
    });

    useEffect(() => {
        dispatch(obtenerConductora(idConductora))
        dispatch(getPerfilConductora(idConductoraLogueada[0].id))
    }, [])


    return (

        // <div className='perfilCard'>
        //     <div className='upperContainer'>
        //         <div className='imageContainer'>
        //             <div key={idConductoraLogueada[0].id}></div>
        //             <img src={idConductoraLogueada[0].fotoPerfil}
        //                 alt='profile pic'
        //                 height='100%'
        //                 width='100px' />
        //             <h1 className='usuario' > Conductora: {idConductoraLogueada[0].usuario} </h1>
        //             {/* <div style={{ cursor: 'pointer' }}>
        //         {/* </div> */}
        //             <span className='lowerContainer'>
        //                 <h2> Nombre: {idConductoraLogueada[0].nombre} </h2>
        //                 <h2> Apellido: {idConductoraLogueada[0].apellido} </h2>
        //                 <h4> E-mail: {idConductoraLogueada[0].email} </h4>
        //                 <h4> País: {idConductoraLogueada[0].pais} </h4>
        //                 <h4> Teléfono: {idConductoraLogueada[0].telefono} </h4>
        //                 <h4> Provincia: {idConductoraLogueada[0].provincia} </h4>
        //                 <h4> Localidad: {idConductoraLogueada[0].localidad} </h4>
        //                 <br />
        //                 <h2>Info Vehicular</h2>
        //                 <h4> Automovil: {idConductoraLogueada[0].automovil} </h4>
        //                 <h4> Patente: {idConductoraLogueada[0].patente} </h4>
        //                 <h4> Habilitación: {idConductoraLogueada[0].habilitacion} </h4>
        //                 {/* <h4> cambiar contraseña </h4> */}
        //             </span>
        //             <br />
        //             <button className='logoutC' onClick={() => navigate('/home')}> Log out </button>
        //             <button className='volver' onClick={() => navigate('/homeConductora')}> Volver </button>
        //             {/* <p className='editIcon'>Editar Perfíl</p> */}
        //         </div>
        //     </div>
        // </div >

        <div class="container d-flex align-items-center justify-content-center vh-100" >
            <div class="row">
                <div class="main-content" id='mainContainer'>

                    <div class="tab-content profile-page" >

                        <div class="container bootstrap snippets bootdey">
                            <div class="row">
                                <div class="col-6 ">
                                    <div class="user-info-left">
                                        <h2>{idConductoraLogueada[0].nombre} <i class="fa fa-circle green-font online-icon"></i><sup class="sr-only">online</sup></h2>
                                        <img class="img-responsive" src={idConductoraLogueada[0].fotoPerfil} alt="Profile Picture" style={{ width: '300px', height: '300px' }} />
                                        <button {...getRootProps()} className="btn btn-block btn-success"><i class="fa fa-envelope-o"></i> Actualizar foto</button>
                                        <input {...getInputProps()} />
                                        <div class="contact">
                                            <button className="btn btn-block btn-success" onClick={() => navigate('/editConductora')}><i class="fa fa-book" ></i> Editar perfil</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-xl-6 ">
                                    <div class="user-info-right">
                                        <div class="basic-info">
                                            <h3><i class="fa fa-square"></i> Informacion básica</h3>
                                            <p class="data-row">
                                                <span class="data-name">Usuario</span>
                                                <span class="data-value">{idConductoraLogueada[0].usuario}</span>
                                            </p>
                                            <p class="data-row">
                                                <span class="data-name">Provincia</span>
                                                <span class="data-value">{idConductoraLogueada[0].provincia}</span>
                                            </p>
                                            <p class="data-row">
                                                <span class="data-name">Ciudad</span>
                                                <span class="data-value">{idConductoraLogueada[0].localidad}</span>
                                            </p>



                                        </div>
                                        <div class="basic-info">
                                            <h3><i class="fa fa-square"></i> Información de contacto</h3>
                                            <p class="data-row">
                                                <span class="data-name">Email</span>
                                                <span class="data-value">{idConductoraLogueada[0].email}</span>
                                            </p>
                                            <p class="data-row">
                                                <span class="data-name">Telefono</span>
                                                <span class="data-value">{idConductoraLogueada[0].telefono}</span>
                                            </p>
                                            <p class="data-row">
                                                <span class="data-name">Dirección</span>
                                                <span class="data-value">{idConductoraLogueada[0].direccion}</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
};