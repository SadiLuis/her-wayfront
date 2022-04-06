<<<<<<< HEAD
import React, { useState, useEffect , useCallback } from 'react'
import { connect } from 'react-redux'
import Image from '../../Media/placeholder.png'
import Navbar from '../Landing/Navbar'
import './PerfilPasajera.css'
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux'
import {getPasajeras , logout} from '../../actions/Usuarios'
import {Loader} from '../Loader/Loader'
import {saveImages} from '../../Helpers/saveImage'
export default function PerfilPasajera() {

    const pasajera = useSelector(state => state.LoginRegisReducer.pasajera)
    const [imagen , setImagen] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(pasajera)
    useEffect(()=>{
       //dispatch(getPasajeras())
    },[], imagen)
=======
// import React, { useState, useEffect , useCallback } from 'react'
// import { connect } from 'react-redux'
// import Image from '../../Media/placeholder.png'
// //import Navbar from '../Landing/Navbar'
// import './PerfilPasajera.css'
// import { useDropzone } from "react-dropzone";
// import { useNavigate } from "react-router-dom";
// import {useSelector , useDispatch} from 'react-redux'
// import {login , logout, getuserDetails, getPasajeras} from '../../actions/Usuarios'
// import {Loader} from '../Loader/Loader'
// import {saveImages} from '../../Helpers/saveImage'


// export default function PerfilPasajera() {
//     const pasajera = useSelector(state => state.LoginRegisReducer.pasajera)
//     const perfil = useSelector(state => state.LoginRegisReducer.usuariaLogueada)
//     const [imagen , setImagen] = useState('')
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     console.log(pasajera)
//     useEffect(()=>{
//         if(perfil.length>0){
//        dispatch(login(perfil[0].id))
//        }else{
//         console.log('error')
//        }
//     },[])
>>>>>>> polaco_15

//   const handleButton = () => {
//       dispatch(logout())
//       navigate('/home')
//   }
//   const onDrop = useCallback(async(oFile) => {
    
//       console.log(oFile)
//      const urlImage = await saveImages(oFile[0]);
//       console.log(urlImage)
//       setImagen(urlImage)
    
// }, []);

// const { getRootProps, getInputProps} = useDropzone({
//     accept: "image/jpeg",
//     noKeyboard: true,
//     multiple: false,
//     onDrop
// });
  
//     return (
         
        
//         <div className='perfilCard'>
//          {perfil.length >0 ?
//          ( <div className='upperContainer'>
//                 {/* <span className='editIcon'>Editar Perfíl</span> */}
//                 <div className='imageContainer'>
//                     <img src={perfil[0].fotoPerfil ? perfil[0].fotoPerfil : imagen ? imagen : Image}
//                         alt='profile pic'
//                         height='100%'
//                         width='100px' />
//                    {/*  <h1 className='usuario'> Usuario: lolo </h1>
//                     <span className='lowerContainer'>
//                         <h2> Nombre: Lorena </h2>
//                         <h4> E-mail: lorena@gmail.com </h4>
//                         <h4> País: Arg </h4>
//                         <h4> Teléfono: 55599966 </h4>
//                         <h4> Provincia: Form </h4>
//                         <h4> Localidad: Fsa </h4> */}
//                     {/* </div> */}
//                         <div style={{ cursor: 'pointer' }}>
//                          <span className='lowerContainer'>
//                          <h1> Usuario: {perfil[0].usuario} </h1> 
//                         <h2> Nombre: {perfil[0].nombre} </h2>
//                         <h4> E-mail: {perfil[0].email} </h4>
//                         <h4> País: {perfil[0].pais} </h4>
//                         <h4> Teléfono: {perfil[0].telefono} </h4>
//                         <h4> Provincia: {perfil[0].provincia} </h4>
//                         <h4> Ciudad: {perfil[0].localidad} </h4> 
//                     </span>
//                     </div>
//                 </div>
//                 <button className='logoutP' onClick={handleButton}> Log out </button>
//                 <button {...getRootProps()} primary>Actualizar foto </button>
//                 <input {...getInputProps()}/>
                
<<<<<<< HEAD
            </div>
        ) : <Loader/>
          }
         </div>
    )

}
=======
//             </div>
//         ) : <Loader/>
//           }
//          </div>
//     )
// }
>>>>>>> polaco_15
