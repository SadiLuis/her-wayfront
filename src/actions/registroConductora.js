import axios from 'axios'; 
import {
    REGISTRO_CONDUCTORA,
    LOGIN_CONDUCTORA,
    DETALLE
} from './index'

export function registroConductora(payload){
    try{
        return async function (dispatch){
            const create = await axios.post('http://localhost:3001/conductora/register', payload);
            return dispatch({
                type: REGISTRO_CONDUCTORA,
                create,
            })
           // return create;
        }
    }catch(err){
        console.log(err)
    }  
}



export function loginConductora({ email, contrasena }) {
    return async (dispatch) => {
        console.log('action')
        try {
            const body = { email, contrasena }
            const { data } = await axios.post('http://localhost:3001/conductora/login', body)
            const registroCond = data.user
            dispatch({
                type: LOGIN_CONDUCTORA,
                payload: registroCond
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }    
}
export function detalleConductora(id) {
    return async function (dispatch) {
        const request = await axios.get(`http://localhost:3001/conductora/${id}`);
        //onst request = await axios.get(`${SERVER}conductora/${id}`)
        console.log(request)
        dispatch({ 
            type: DETALLE, 
            payload: request.data
        })
    }
}