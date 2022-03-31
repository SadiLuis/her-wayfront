import axios from 'axios'; 
import {
    REGISTRO_CONDUCTORA,
    LOGIN_CONDUCTORA,
} from './index'
import { SERVER } from './VariableGlobal';



export function registroConductora(payload){
    return async function (dispatch){
        try{
                const create = await axios.post(`${SERVER}/conductora/register`, payload);
                return dispatch({
                    type: REGISTRO_CONDUCTORA,
                    create,
                })
            // return create;
        }catch(err){
            console.log(err)
        }  
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
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }    
}

