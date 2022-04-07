import React, { useEffect, useState, useRef } from 'react';
import { registroConductora } from '../../actions/registroConductora';
//import {getPerfilConductora} from '../../actions/conductora';
import { useDispatch, useSelector } from 'react-redux';

import { saveImages } from '../../Helpers/saveImage'
import { Link, useNavigate } from 'react-router-dom';
import uno from '../../image/1.jpg'
import dos from '../../image/2.jpg'
import tres from '../../image/3.jpg'

//import { useStorage} from "reactfire"

export function validate(conductora){
    let errors={};
    if(!conductora.nombre && /\d/.test(conductora)){
        errors.nombre = 'debe ingresar nombre completo'
    }
    if(!conductora.apellido){
        errors.apellido = ' debe ingresar apellido completo'
    }
    if(!conductora.usuario){
        errors.usuario = ' debe ingresar un usuario'
    }
    if(!conductora.contrasena){
        errors.contrasena = 'ingrese una contraseña que contenga letras y numeros'
    }
    if(!conductora.email && /\S+@\S+\.\S+/.test(conductora)){
        errors.email= 'debe ingresar un email valido'
    }
    if (!conductora.pais) {
        errors.pais = 'debe ingresar el pais'
    }
    if (!conductora.provincia) {
        errors.provincia = 'debe ingresar la provincia donde reside'
    }
    if (!conductora.fotoPerfil) {
        errors.fotoPerfil = 'debe colocar una foto de perfil'
    }
    if (!conductora.fotoDni) {
        errors.fotoDni = 'seleccione DNI, permiso de Conducir o Pasaporte'
    }
    if (!conductora.direccion) {
        errors.direccion = 'debe ingresar su direccion de residencia'
    }
    if (!conductora.telefono) {
        errors.telefono = 'Ingrese numero telefonico con codigo de area ej ... 011 para Bs. As.'
    }
    if (!conductora.localidad) {
        errors.localidad = 'debe ingresear la localidad donde reside'
    }
    if (!conductora.automovil) {
        errors.automovil = 'ingrese marca y modelo del vehiculo'
    }
    if (!conductora.patente) {
        errors.patente = 'ingrese la patente del vehiculo'
    }
    if (!conductora.seguro) {
        errors.seguro = 'ingrese nombre del seguro y poliza'
    }

    if(!conductora.habilitacion){
        errors.habilitacion='ingrese la habilitación correspondiete del vehículo'
    }
    return errors
}

export default function CreateConductora() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const refFileInput = useRef();

    const [conductora, setConductora]=useState({   //este es mi input
        nombre:"",
        apellido:"",
        usuario:"",
        contrasena:"",
        email:"",
        telefono:"",
        pais:"",
        provincia:"",
        localidad:"",
        direccion:"",
        fotoPerfil:"",
        fotoDni:"",
        automovil:"",
        patente:"",
        seguro:"",
        habilitacion:"",
        aceptaMascotas:"",
        aceptaCochecito:""
    });

    const [errors, setErrors] = useState({})
    // useEffect(()=>{
    //     dispatch(getPerfilConductora())
    // },[dispatch]);

    async function handleSubmit(e) {
        e.preventDefault()
        let auxInput = conductora;

        const urlImage = await saveImages(auxInput.fotoPerfil);
        const urlImage2 = await saveImages(auxInput.fotoDni)
        auxInput.fotoPerfil = urlImage;
        auxInput.fotoDni = urlImage2

        if(errors){
            
        setConductora({
        nombre:"",
        apellido:"",
        usuario:"",
        contrasena:"",
        email:"",
        telefono:"",
        pais:"",
        provincia:"",
        localidad:"",
        direccion:"",
        fotoPerfil:"",
        fotoDni:"",
        automovil:"",
        patente:"",
        seguro:"",
        habilitacion:"",
        aceptaMascotas:"",
        aceptaCochecito:"",
        
        })
        dispatch(registroConductora(auxInput))
        alert('usuario creado con éxito')
        }else{
            alert('rellenar los campos correctamente')
        }  
       navigate('/loginConductora') 
    }
         
    function handleChange(name ,value){
        console.log(conductora)
        setConductora({
            ...conductora,
            [name]: value,
        })
        setErrors(validate({
            ...conductora,
            [name]: value,
        }))
    }
    function handleSelectMascotas(e){
        console.log(conductora)
        setConductora({
            ...conductora,
            aceptaMascotas: e.target.value
        })
    }
  
   function handleSelectCochecitos(e){
        console.log(conductora)
        setConductora({
            ...conductora,
            aceptaCochecito: e.target.value
        })
    }

    return (
        <div className="row g-0 pt-3">
            <div class="col-lg-1"></div>
            <div class=" col-lg-5">
                <div class="sticky-top">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="tamaño" src={uno} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="tamaño" src={dos} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="tamaño" src={tres} alt="Third slide" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="title px-lg-5 pt-lg-4 pb-2 p-4">
                    <h1> Her-Way </h1>
                </div>
                <br />
                <h2>Registro de Conductora</h2>
                {/* <p> * campos obligatorios</p> */}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="mb-1">
                        <label htmlFor="exampleInputPassword1">&nbsp; Nombre</label>
                        <input name='nombre' className="form-control"
                            type='text'
                            value={conductora.nombre}

                            placeholder='Ingrese su/s nombre/s'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}

                            required>
                        </input>
                        {errors.nombre && (
                            <p className="text-danger">
                                {errors.nombre}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Apellido</label>
                        <input name='apellido' className="form-control"
                            type='text'
                            value={conductora.apellido}
                            placeholder='Ingrese su/s apellido/s'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required>
                        </input>
                        {errors.apellido && (
                            <p className="text-danger">
                                {errors.apellido}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Usuario</label>
                        <input name='usuario' className="form-control"
                            type='text'
                            value={conductora.usuario}
                            placeholder='Ingrese su usuario'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required>
                        </input>
                        {errors.usuario && (
                            <p className="text-danger">
                                {errors.usuario}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Contraseña</label>
                        <input name='contrasena' className="form-control"
                            id='contrasena'
                            type='password'
                            value={conductora.contrasena}
                            placeholder='Ingrese su contraseña'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required>
                        </input>
                        {/* {errors.contrasena &&(
                        <p className="error">
                            {errors.contrasena}
                        </p>
                    )}   */}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Correo</label>
                        <input name='email' className="form-control"
                            id='email'
                            type='text'
                            value={conductora.email}
                            placeholder='Ingrese su correo'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required>
                        </input>
                        {errors.email && (
                            <p className="text-danger">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; País</label>
                        <input name='pais' className="form-control"
                            id='pais'
                            type='text'
                            value={conductora.pais}
                            placeholder='Ingrese el país'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required>
                        </input>
                        {errors.pais && (
                            <p className="text-danger">
                                {errors.pais}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Provincia</label>
                        <input name='provincia' className="form-control"
                            id='provincia'
                            type='text'
                            value={conductora.provincia}
                            placeholder='Ingrese la provincia donde reside'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required>
                        </input>
                        {errors.provincia && (
                            <p className="text-danger">
                                {errors.provincia}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Localidad</label>
                        <input name='localidad' className="form-control"
                            id='localidad'
                            type='text'
                            value={conductora.localidad}
                            placeholder='Ingrese la localidad donde reside'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required>
                        </input>
                        {errors.localidad && (
                            <p className="text-danger">
                                {errors.localidad}
                            </p>
                        )}
                    </div>

                    {/* </div>*/}
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Foto de Perfíl</label>
                        <input name='fotoPerfil' className="form-control"
                            id='fotoPerfil'
                            type='file'
                            placeholder='...img url'
                            onChange={(e) => handleChange(e.target.name, e.target.files[0])}
                            ref={refFileInput}
                            required>
                        </input>
                        {/* <button onClick={handleSend} type='button'>Upload</button> */}
                        {errors.fotoPerfil && (
                            <p className="error">
                                {errors.fotoPerfil}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Credencial de Identificación</label>
                        <input name='fotoDni' className="form-control"
                            id='fotoDni'
                            type='file'
                            placeholder='...img url'
                            onChange={(e) => handleChange(e.target.name, e.target.files[0])}
                            ref={refFileInput}
                            required>
                        </input>
                        {/* <button onClick={handleSend} type='button'>Upload</button> */}
                        {errors.fotoDni && (
                            <p className="error">
                                {errors.fotoDni}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1" >&nbsp; Dirección</label>
                        <input name='direccion' className="form-control"
                            id='direccion'
                            type='text'
                            value={conductora.direccion}
                            placeholder='Ingrese el domicilio donde reside'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required>
                        </input>
                        {errors.direccion && (
                            <p className="text-danger">
                                {errors.direccion}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Teléfono</label>
                        <input name='telefono' className="form-control"
                            id='telefono'
                            type='text'
                            value={conductora.telefono}
                            placeholder='Ingrese su número telefónico con codigo de area'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required>
                        </input>
                        {errors.telefono && (
                            <p className="text-danger">
                                {errors.telefono}
                            </p>
                        )}
                    </div>

                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Vehículo</label>
                        <input name='automovil' className="form-control"
                            id='automovil'
                            type='text'
                            value={conductora.automovil}
                            placeholder='Ingrese marca y modelo del vehículo'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required>
                        </input>
                        {errors.automovil && (
                            <p className="text-danger">
                                {errors.automovil}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Patente</label>
                        <input name='patente' className="form-control"
                            id='patente'
                            type='text'
                            value={conductora.patente}
                            placeholder='Ingrese la patente del vehículo'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required>
                        </input>
                        {errors.patente && (
                            <p className="text-danger">
                                {errors.patente}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Seguro</label>
                        <input name='seguro' className="form-control"
                            id='seguro'
                            type='text'
                            value={conductora.seguro}
                            placeholder='Ingrese nombre/póliza del seguro del vehículo'
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required>
                        </input>
                        {errors.seguro && (
                            <p className="text-danger">
                                {errors.seguro}
                            </p>
                        )}
                    </div>
           
                <label>Acepta Mascotas:</label>
                <select onChange={(e)=>handleSelectMascotas(e)}>
                    <option value="false" name="aceptaMascotas" defaultValue={false}>Elige</option>
                    <option value="true" name="aceptaMascotas"defaultValue={false}>Acepta</option>
                    <option value="false" name="aceptaMascotas" defaultValue={false}>No Acepta</option>
                    
                </select>
                </div>

                <div>
                <label>Acepta Cochecitos de bebés:</label>
                <select onChange={(e)=>handleSelectCochecitos(e)}>
                <option value="true" name="aceptaCochecito">Elige </option>
                    <option value="true" name="aceptaCochecito">Acepta </option>
                    <option value="false" name="aceptaCochecito">No Acepta</option>
                    
                </select>
                </div>
                <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">&nbsp; Habilitación</label>
                <input name='habilitacion' className="form-control"
                    id='habilitacion'
                    type='text'
                    value={conductora.habilitacion}
                    placeholder='habilitacion municipal'
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                    required>
                    </input>  
                    {errors.habilitacion &&(
                        <p className="text-danger">
                            {errors.habilitacion}
                        </p>
                    )} 
                </div>

                <br />

                    <button class="btn btn-primary w-100" type='submit'

               
                     /* disabled={conductora.nombre&&conductora.apellido&&conductora.usuario&&conductora.contrasena&&
                        conductora.direccion&&conductora.email&&conductora.fotoPerfil&&conductora.localidad&&conductora.pais&&conductora.automovil&&
                        conductora.patente&&conductora.habilitacion&&conductora.seguro&&conductora.provincia&&conductora.telefono&&conductora.fotoDni ? false : true} */>Registrarse</button>



                    {/* <Link to='/'>
                        <button className="btn btn-primary" style={{
                            margin: '10px'
                        }}>Volver</button>
                    </Link> */}
                    <div div className="form-group form-check p-2 text-center">
                        <small >El equipo de Her-Way nunca te pedira tu correo o contraseña. </small>
                    </div>

                </form>
            </div>
        </div>

    )

}