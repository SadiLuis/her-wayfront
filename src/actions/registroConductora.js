import axios from 'axios'; 
import {
    REGISTRO_CONDUCTORA,
    LOGIN_CONDUCTORA,
    //DETALLE
} from './index'
import { SERVER } from './VariableGlobal';




export function registroConductora(body){
    try{
        return async function (dispatch){
            const create = await axios.post(`${SERVER}/conductora/register`, body);
            return dispatch({
                type: REGISTRO_CONDUCTORA,
                payload: create,
            })
           // return create;
        }
    // eslint-disable-next-line no-unreachable
    }catch(err){
        console.log(err)
    }  
}



export function loginConductora({ email, contrasena }) {
    return async (dispatch) => {
        console.log('action')
        try {
            const body = { email, contrasena }
            const { data } = await axios.post(`${SERVER}/conductora/login`, body)
            const registroCond = data.user
            dispatch({
                type: LOGIN_CONDUCTORA,
                payload: registroCond
            })

        } catch (error) {
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