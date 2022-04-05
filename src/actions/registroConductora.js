import axios from 'axios'; 
import {
    REGISTRO_CONDUCTORA,
    LOGIN_CONDUCTORA,
    LOGOUT_CONDUCTORA
    //DETALLE
} from './index'
import { SERVER } from './VariableGlobal';
import Swal from "sweetalert2";



export function registroConductora(payload){
    return async function (dispatch){
        try{
                const create = await axios.post(`${SERVER}/conductora/register`, payload);
                return dispatch({
                    type: REGISTRO_CONDUCTORA,
                    create,
                },
                localStorage.setItem('conductoras', JSON.stringify(create)))
            // return create;
        }catch(err){
            console.log(err)
        }  
    }
}

export function logoutConductora(){
    return { 
        type: LOGOUT_CONDUCTORA
    }
}

export function loginConductora({ email, contrasena }) {
    return async (dispatch) => {
        console.log('action')
        try {
            const body = { email, contrasena }
            const { data } = await axios.post(`${SERVER}/conductora/login`, body)
            const conductoras = await axios.get(`${SERVER}/conductora`)
            const registroCond = data.user
            const filterConductor = conductoras.data.filter((c)=>data.user.email === c.email)
            console.log(filterConductor)
            console.log('data', data)
            dispatch({
                type: LOGIN_CONDUCTORA,
                payload: registroCond,
                conducLogueada: filterConductor
            },
            localStorage.setItem('conductoras', JSON.stringify(data)))
            console.log(data)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos',
                text: 'La contraseña o el correo son incorrectos!',
               
              })
            console.log(error)
        }
    }
}



// export function detalleConductora(id) {
//     return async function (dispatch) {
//         const request = await axios.get(`${SERVER}/conductora/${id}`);
//         //onst request = await axios.get(`${SERVER}conductora/${id}`)
//         console.log(request)
//         dispatch({ 
//             type: DETALLE, 
//             payload: request.data
//         })
//     }
// }
