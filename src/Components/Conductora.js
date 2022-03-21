import React, {useEffect, useState} from 'react';
import {postConductoras, getAllConductoras} from '../actions/conductora';
import { useDispatch, useSelector } from 'react-redux';

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

    useEffect(()=>{
        dispatch(getAllConductoras())
    },[dispatch]);


    function handleSubmit(){
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
    };
    
    function handleSelect(e){
        //console.log(e.target.files[0])
        setConductora(e.target.files[0])
        
    }

    function handleSend(){
        if(!conductora){
            alert('debe seleccionar un archivo')
            return
        }
    }

    function handleChange(e){
        setConductora({
            ...conductora,
            [e.target.name] : e.target.name,
        })
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
                <input name='name'
                    type='text'
                    value={conductora.name}
                    placeholder='ingrese su/s nombre/s'
                    onChange={handleChange}
                    required>
                    </input>  
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
                </div>
                <div>
                <label>Contraseña *</label>
                <input name='contraseña'
                    id='contraseña'
                    type='text'
                    value={conductora.contrasena}
                    placeholder='ingrese su contraseña'
                    onChange={handleChange}
                    required>
                    </input>  
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
                </div>
                <div>
                <label>Localidad *</label>
                <input name='Localidad'
                    id='localidad'
                    type='text'
                    value={conductora.localidad}
                    placeholder='ingrese la localidad donde reside actulamente'
                    onChange={handleChange}
                    required>
                    </input>  
                </div>
                <div>
                <label>Foto de Perfil *</label>
                <input name='fotoPerfil'
                    id='fotoPerfil'
                    type='file'
                    value={conductora.fotoPerfil}
                    placeholder='...img url'
                    onChange={handleSelect}
                    required>
                    </input>  
                    <button onClick={handleSend} type='button'>Upload</button>

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
                </div>
                <button type='submit'>Registrarse</button>

                </form>
            </div>
        </div>
        </div>

    )

}