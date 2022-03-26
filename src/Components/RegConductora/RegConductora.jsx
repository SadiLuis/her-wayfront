import React, {useEffect, useState , useRef} from 'react';
import {registerConductora} from '../../actions/conductora';
import { useDispatch, useSelector } from 'react-redux';

import {saveImages } from '../../Helpers/saveImage'
import { Link ,useNavigate} from 'react-router-dom';
// import uno from '../../image/1.jpg'
// import dos from '../../image/2.jpg'
// import tres from '../../image/3.jpg'

//import { Link } from 'react-router-dom';
//import { useStorage} from "reactfire"


export function validate(conductora){
   
    let errors={};
    if(!conductora.nombre){
        errors.nombre = 'debe ingresar nombre completo'
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
    if(!conductora.fotoDni){
        errors.fotoDni = 'seleccione DNI, permiso de Conducir o Pasaporte'
    }
    if(!conductora.direccion){
        errors.direccion='debe ingresar su direccion de residencia'
    }
    if(!conductora.telefono){
        errors.telefono='Ingrese numero telefonico con codigo de area ej ... 011 para Bs. As.'
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
        errors.seguro='ingrese nombre del seguro y poliza'
    }
    if(!conductora.habilitacion){
        errors.habilitacion='ingrese la hbilitacion correspondiete del vehiculo'
    }
    return errors
}

export default function CreateConductora(){
    const navigate= useNavigate()
    const dispatch = useDispatch();
    const refFileInput = useRef();
    const [conductora, setConductora]=useState({   //este es mi input
        nombre:"",
        usuario:"",
        contrasena:"",
        email:"",
        pais:"",
        provincia:"",
        fotoPerfil:"",
        fotoDni:"",
        direccion:"",
        telefono:"",
        localidad:"",
        automovil:"",
        patente:"",
        seguro:"",
        habilitacion:"",
    });

    const [errors, setErrors]=useState({})

   
 async function handleSubmit(e){
        e.preventDefault()
        let auxInput = conductora;

    const urlImage = await saveImages(auxInput.fotoPerfil);
    const urlImage2= await saveImages(auxInput.fotoDni)
    auxInput.fotoPerfil = urlImage;
    auxInput.fotoDni = urlImage2
       
    console.log('entro',auxInput)
         let errors = Object.keys(validate(conductora))

        if(!errors){
        setConductora({
        nombre:"",
        usuario:"",
        contrasena:"",
        email:"",
        pais:"",
        provincia:"",
        fotoPerfil:"",
        fotoDni:"",
        direccion:"",
        telefono:"",
        localidad:"",
        automovil:"",
        patente:"",
        seguro:"",
        habilitacion:"",
        })
          dispatch(registerConductora(auxInput))
        alert('usuario creado con exito')
        }else{
            alert('rellenar los campos correctamente')
        }  
        navigate('/perfilConductora') 
    

    }
   
         
    function handleChange(name ,value){
        console.log(conductora)
        setConductora({
            ...conductora,
            [name] : value,
        })
        setErrors(validate({
            ...conductora,
            [name] : value,
        }))
    }

    return(

        <div className='col-md-4'>
        <div className='mt-5 ms-5'>
            <div>
                <p> * campos obligatorios</p>
                <h1 className='text-center'>REGISTRO CONDUCTORA</h1>
               
            </div>
            <div>
                <form onSubmit={(e)=> handleSubmit(e)}>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">Nombre *</label>
                <input name='nombre' className="form-control"
                    type='text'
                    value={conductora.nombre}

                    placeholder='ingrese su/s nombre/s'
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}

                    required>
                    </input> 
                    {errors.nombre &&(
                        <p className="text-danger">
                            {errors.nombre}
                        </p>
                    )} 
                </div>
                <div className='form-group'>
                <label  htmlFor="exampleInputPassword1">Apellido *</label>
                <input name='apellido' className="form-control"
                    type='text'
                    value={conductora.apellido}
                    placeholder='ingrese su/s apellido/s'
                    onChange={(e)=> handleChange(e.target.name , e.target.value)}
                    required>
                    </input> 
                    {errors.apellido &&(
                        <p className="text-danger">
                            {errors.apellido}
                        </p>
                    )}  
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Usuario *</label>
                <input name='usuario'  className="form-control"
                    type='text'
                    value={conductora.usuario}
                    placeholder='ingrese su usuario'
                    onChange={(e)=> handleChange(e.target.name,e.target.value)}
                    required>
                    </input> 
                    {errors.usuario &&(
                        <p className="text-danger">
                            {errors.usuario}
                        </p>
                    )}  
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Contraseña *</label>
                <input name='contrasena'  className="form-control"
                    id='contrasena'
                    type='password'
                    value={conductora.contrasena}
                    placeholder='ingrese su contraseña'
                    onChange={(e)=>handleChange(e.target.name ,e.target.value)}
                    required>
                    </input> 
                    {/* {errors.contrasena &&(
                        <p className="error">
                            {errors.contrasena}
                        </p>
                    )}   */}
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Email *</label>
                <input name='email'  className="form-control"
                    id='email'
                    type='text'
                    value={conductora.email}
                    placeholder='ingrese su email'
                    onChange={(e)=>handleChange(e.target.name ,e.target.value)}
                    required>
                    </input> 
                    {errors.email &&(
                        <p className="text-danger">
                            {errors.email}
                        </p>
                    )}  
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Pais *</label>
                <input name='pais' className="form-control"
                    id='pais'
                    type='text'
                    value={conductora.pais}
                    placeholder='ingrese el pais'
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                    required>
                    </input>  
                    {errors.pais &&(
                        <p className="text-danger">
                            {errors.pais}
                        </p>
                    )} 
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Provincia *</label>
                <input name='provincia' className="form-control"
                    id='provincia'
                    type='text'
                    value={conductora.provincia}
                    placeholder='ingrese la provincia donde reside'
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                    required>
                    </input> 
                    {errors.provincia &&(
                        <p className="text-danger">
                            {errors.provincia}
                        </p>
                    )}  
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Localidad *</label>
                <input name='localidad' className="form-control"
                    id='localidad'
                    type='text'
                    value={conductora.localidad}
                    placeholder='ingrese la localidad donde reside actulamente'
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                    required>
                    </input>  
                    {errors.localidad &&(
                        <p className="text-danger">
                            {errors.localidad}
                        </p>
                    )} 
                </div>
                
                {/* </div>*/} 
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Foto de Perfil *</label>
                <input name='fotoPerfil' className="form-control"
                    id='fotoPerfil'
                    type='file'
                   placeholder='...img url'
                    onChange={(e)=>handleChange(e.target.name, e.target.files[0])}
                    ref={refFileInput}
                    required>
                    </input>  
                    {/* <button onClick={handleSend} type='button'>Upload</button> */}
                    {errors.fotoPerfil &&(
                        <p className="error">
                            {errors.fotoPerfil}
                        </p>
                    )} 
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Credencial de Identificacion *</label>
                <input name='fotoDni' className="form-control"
                    id='fotoDni'
                    type='file'
                    placeholder='...img url'
                    onChange={(e)=>handleChange(e.target.name ,e.target.files[0])}
                    ref={refFileInput}
                    required>
                    </input>  
                    {/* <button onClick={handleSend} type='button'>Upload</button> */}
                    {errors.fotoDni &&(
                        <p className="error">
                            {errors.fotoDni}
                        </p>
                    )} 
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1" >Direccion *</label>
                <input name='direccion' className="form-control"
                    id='direccion'
                    type='text'
                    value={conductora.direccion}
                    placeholder='domicilio real donde reside'
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                    required>
                    </input>  
                    {errors.direccion &&(
                        <p className="text-danger">
                            {errors.direccion}
                        </p>
                    )} 
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Telefono *</label>
                <input name='telefono'  className="form-contro"
                    id='telefono'
                    type='text'
                    value={conductora.telefono}
                    placeholder='numero telefonico con codigo de area ej ... 011 para Bs. As.'
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                    required>
                    </input> 
                    {errors.telefono &&(
                        <p className="text-danger">
                            {errors.telefono}
                        </p>
                    )}  
                </div>
                
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Vehiculo *</label>
                <input name='automovil' className="form-contro"
                    id='automovil'
                    type='text'
                    value={conductora.automovil}
                    placeholder='ingrese marca y modelo del vehiculo'
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                    required>
                    </input> 
                    {errors.automovil &&(
                        <p className="text-danger">
                            {errors.automovil}
                        </p>
                    )}  
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Patente *</label>
                <input name= 'patente' className="form-contro"
                    id='patente'
                    type='text'
                    value={conductora.patente}
                    placeholder='ingrese la petente del vehiculo'
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                    required>
                    </input> 
                    {errors.patente &&(
                        <p className="text-danger">
                            {errors.patente}
                        </p>
                    )}  
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Seguro *</label>
                <input name='seguro' className="form-contro"
                    id='seguro'
                    type='text'
                    value={conductora.seguro}
                    placeholder='nombre/poliza del seguro del vehiculo'
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                    required>
                    </input>  
                    {errors.seguro &&(
                        <p className="text-danger">
                            {errors.seguro}
                        </p>
                    )} 
                </div>
                <div className='form-group'>
                <label htmlFor="exampleInputPassword1">Habilitacion *</label>
                <input name='habilitacion' className="form-contro"
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
                <button className="btn btn-primary" type='submit' /* disabled={conductora.nombre&&conductora.apellido&&conductora.usuario&&conductora.contrasena&&
                conductora.direccion&&conductora.email&&conductora.fotoPerfil&&conductora.localidad&&conductora.pais&&conductora.automovil&&
                conductora.patente&&conductora.habilitacion&&conductora.seguro&&conductora.provincia&&conductora.telefono&&conductora.fotoDni ? false : true} */>Registrarse</button>
                <div >
                    <Link  to='/'>
                        <button className="btn btn-primary">Volver</button>
                    </Link>
                </div>
                </form>
            </div>
        </div>
        </div>

    )

}