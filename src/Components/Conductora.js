import React, {useEffect, useState} from 'react';
import {postConductoras, getAllConductoras} from '../actions/conductora';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export function validate(conductora){
    let errors={};
    if(!conductora.nombre){
        errors.nombre = 'debe ingresar nombre completo'
    }
    if(!conductora.apellido){
        errors.apellido = 'debe ingresar apellido '
    }
    if(!conductora.usuario){
        errors.usuario = ' debe ingresar un usuario'
    }
    // if(!conductora.contrasena){
    //     errors.contrasena = 'ingrese sus contraseña'
    // }
    if(!conductora.email){
        errors.email= 'debe ingresar un email valido'
    }
    if(!conductora.pais){
        errors.pais='debe ingresar el pais'
    }
    if(!conductora.provincia){
        errors.provincia='debe ingresar la provincia donde reside'
    }
    if(!conductora.fotoPerfil){
        errors.fotoPerfil='debe colocar una foto de perfil'
    }
    if(!conductora.direccion){
        errors.direccion='debe ingresar su direccion de residencia'
    }
    if(!conductora.telefono){
        errors.telefono='numero telefonico con codigo de area ej ... 011 para Bs. As.'
    }
    if(!conductora.localidad){
        errors.localidad='debe ingresear la localidad donde reside'
    }
    if(!conductora.automovil){
        errors.automovil='ingrese marca y modelo del vehiculo'
    }
    if(!conductora.patente){
        errors.patente='ingrese la patente del vehiculo'
    }
    if(!conductora.seguro){
        errors.seguro='ingrese seguro y poliza'
    }
    if(!conductora.habilitacion){
        errors.habilitacion='ingrese la hbilitacion correspondiete del vehiculo'
    }
    return errors
}

export default function CreateConductora(){
    const dispatch = useDispatch();
    const conductoras = useSelector((state)=>state.allConductoras);
    const [conductora, setConductora]=useState({   //este es mi input
        nombre:"",
        apellido:"",
        usuario:"",
        contrasena:"",
        email:"",
        pais:"",
        provincia:"",
        fotoPerfil:"",
        direccion:"",
        telefono:"",
        localidad:"",
        automovil:"",
        patente:"",
        seguro:"",
        habilitacion:"",
    });

    const [errors, setErrors]=useState({})


    useEffect(()=>{
        dispatch(getAllConductoras())
    },[dispatch]);


    function handleSubmit(e){
        e.preventDefault()
        let errors = Object.keys(validate(conductora))
        if(!errors.length !==0){
            dispatch(postConductoras(conductora))
        setConductora({
        nombre:"",
        apellido:"",
        usuario:"",
        contrasena:"",
        email:"",
        pais:"",
        provincia:"",
        fotoPerfil:[],
        direccion:"",
        telefono:"",
        localidad:"",
        automovil:"",
        patente:"",
        seguro:"",
        habilitacion:"",
        })
        alert('usuario creado con exito')
        }else{
            alert('rellenar los comapos correctamente')
        }   
    };
    
    // function handleSelect(e){
    //     //console.log(e.target.files[0])
    //     setConductora(e.target.files[0])
        
    // }

    // function handleSend(){
    //     if(!conductora){
    //         alert('debe seleccionar un archivo')
    //         return
    //     }
    // }

    function handleChange(e){
        setConductora({
            ...conductora,
            [e.target.name] : e.target.value,
        })
        setErrors(validate({
            ...conductora,
            [e.target.name] : e.target.value,
        }))
    }

    return(
        <div>
        <div>
            <div>
                <p> * campos obligatorios</p>
                <h1>Registro Conductora</h1>
            </div>
            <div>
                <form onSubmit={(e)=> handleSubmit(e)}>
                <div>
                <label>Nombre *</label>
                <input name='nombre'
                    type='text'
                    value={conductora.name}
                    placeholder='ingrese su/s nombre/s'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.nombre &&(
                        <p className="error">
                            {errors.nombre}
                        </p>
                    )} 
                </div>
                <div>
                <label>Apellido *</label>
                <input name='apellido'
                    type='text'
                    value={conductora.apellido}
                    placeholder='ingrese su/s apellido/s'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.apellido &&(
                        <p className="error">
                            {errors.apellido}
                        </p>
                    )}  
                </div>
                <div>
                <label>Usuario *</label>
                <input name='usuario'
                    type='text'
                    value={conductora.usuario}
                    placeholder='ingrese su usuario'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.usuario &&(
                        <p className="error">
                            {errors.usuario}
                        </p>
                    )}  
                </div>
                <div>
                <label>Contraseña *</label>
                <input name='contrasena'
                    id='contrasena'
                    type='password'
                    value={conductora.contrasena}
                    placeholder='ingrese su contraseña'
                    onChange={handleChange}
                    required>
                    </input> 
                    {/* {errors.contrasena &&(
                        <p className="error">
                            {errors.contrasena}
                        </p>
                    )}   */}
                </div>
                <div>
                <label>Email *</label>
                <input name='email'
                    id='email'
                    type='text'
                    value={conductora.email}
                    placeholder='ingrese su email'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.email &&(
                        <p className="error">
                            {errors.email}
                        </p>
                    )}  
                </div>
                <div>
                <label>Pais *</label>
                <input name='pais'
                    id='pais'
                    type='text'
                    value={conductora.pais}
                    placeholder='ingrese el pais'
                    onChange={handleChange}
                    required>
                    </input>  
                    {errors.pais &&(
                        <p className="error">
                            {errors.pais}
                        </p>
                    )} 
                </div>
                <div>
                <label>Provincia *</label>
                <input name='provincia'
                    id='provincia'
                    type='text'
                    value={conductora.provincia}
                    placeholder='ingrese la provincia donde reside'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.provincia &&(
                        <p className="error">
                            {errors.provincia}
                        </p>
                    )}  
                </div>
                <div>
                <label>Localidad *</label>
                <input name='localidad'
                    id='localidad'
                    type='text'
                    value={conductora.localidad}
                    placeholder='ingrese la localidad donde reside actulamente'
                    onChange={handleChange}
                    required>
                    </input>  
                    {errors.localidad &&(
                        <p className="error">
                            {errors.localidad}
                        </p>
                    )} 
                </div>
                <div>
                <label>Foto de Perfil *</label>
                <input name='fotoPerfil'
                    id='fotoPerfil'
                    type='text'
                    value={conductora.fotoPerfil}
                    placeholder='...img url'
                    onChange={handleChange}
                    required>
                    </input>  
                    {/* <button onClick={handleSend} type='button'>Upload</button> */}
                    {errors.fotoPerfil &&(
                        <p className="error">
                            {errors.fotoPerfil}
                        </p>
                    )} 
                </div>
                <div>
                <label>Direccion *</label>
                <input name='direccion'
                    id='direccion'
                    type='text'
                    value={conductora.direccion}
                    placeholder='domicilio real donde reside'
                    onChange={handleChange}
                    required>
                    </input>  
                    {errors.direccion &&(
                        <p className="error">
                            {errors.direccion}
                        </p>
                    )} 
                </div>
                <div>
                <label>Telefono *</label>
                <input name='telefono'
                    id='telefono'
                    type='text'
                    value={conductora.telefono}
                    placeholder='numero telefonico con codigo de area ej ... 011 para Bs. As.'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.telefono &&(
                        <p className="error">
                            {errors.telefono}
                        </p>
                    )}  
                </div>
                
                <div>
                <label>Vehiculo *</label>
                <input name='automovil'
                    id='automovil'
                    type='text'
                    value={conductora.automovil}
                    placeholder='ingrese marca y modelo del vehiculo'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.automovil &&(
                        <p className="error">
                            {errors.automovil}
                        </p>
                    )}  
                </div>
                <div>
                <label>Patente *</label>
                <input name='patente'
                    id='patente'
                    type='text'
                    value={conductora.patente}
                    placeholder='ingrese la petente del vehiculo'
                    onChange={handleChange}
                    required>
                    </input> 
                    {errors.patente &&(
                        <p className="error">
                            {errors.patente}
                        </p>
                    )}  
                </div>
                <div>
                <label>Seguro *</label>
                <input name='seguro'
                    id='seguro'
                    type='text'
                    value={conductora.seguro}
                    placeholder='nombre/poliza del seguro del vehiculo'
                    onChange={handleChange}
                    required>
                    </input>  
                    {errors.seguro &&(
                        <p className="error">
                            {errors.seguro}
                        </p>
                    )} 
                </div>
                <div>
                <label>Habilitacion *</label>
                <input name='habilitacion'
                    id='habilitacion'
                    type='text'
                    value={conductora.habilitacion}
                    placeholder='habilitacion municipal'
                    onChange={handleChange}
                    required>
                    </input>  
                    {errors.habilitacion &&(
                        <p className="error">
                            {errors.habilitacion}
                        </p>
                    )} 
                </div>
                <button type='submit' disabled={conductora.nombre&&conductora.apellido&&conductora.usuario&&conductora.contrasena&&
                conductora.direccion&&conductora.email&&conductora.fotoPerfil&&conductora.localidad&&conductora.pais&&conductora.automovil&&
                conductora.patente&&conductora.habilitacion&&conductora.seguro&&conductora.provincia&&conductora.telefono ? false : true}>Registrarse</button>
                <div>
                    <Link to='/login'>
                        <button>Volver</button>
                    </Link>
                </div>
                </form>
            </div>
        </div>
        </div>

    )

}