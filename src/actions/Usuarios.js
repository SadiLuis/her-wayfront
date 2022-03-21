import axios from "axios";
import tokenUser from "../Helpers/TokenUser";
import {
    GET_USER_DETAILS,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
    LOGOUT_USER,
    AUTHENTICATION_ERROR,
    UPDATE_USER,
    RESET_PASSWORD,
    RELOADING_PAG
} from "../actions/index";

export function updateUser (newUser){
    return async function (dispach){
        try{
            await axios.put(`http://localhost:3001/usuario/${newUser.id}`, newUser, tokenUser())
            dispach(getuserDetails())
            return{
                type: UPDATE_USER,
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export function getuserDetails (id){
    return async function (dispach){
        try{
            const res = await axios.get(`http://localhost:3001/usuario/${id}`, tokenUser())
          
            dispach({
                type: GET_USER_DETAILS,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
            dispach({
                type: AUTHENTICATION_ERROR,
            })

        }
    }
}

export function logout (){
    return { type: LOGOUT_USER }
}

export function login ( {email, contrasena} ){
    return async (dispach) => {
        console.log('action')
        try{
            // const config = {
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // }
            const body = {email, contrasena}
            
            const {data} = await axios.post(`http://localhost:3001/usuario/login`, body )
            const infoUser = data.user
            dispach({
                type: LOGIN_USER_SUCCESS,
                payload: infoUser
            })
            console.log(data)
           
        } catch (error) {
            console.log(error)
            return dispach({
                type: LOGIN_USER_ERROR,
            })
        }
    }    
    
}

export function register ({
    nombre,
    usuario,
    contrasena,
    email,
    pais,
    provincia,
    direccion,
    telefono,
    localidad
}) {
    return async function (dispach){
        try{
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const body = {
                nombre,
                usuario,
                contrasena,
                email,
                pais,
                provincia,
                direccion,
                telefono,
                localidad
            }
            const {data} = await axios.post(`http://localhost:3001/usuario/register`, body, config)
            const infoUser = data.user
            dispach({
                type: REGISTER_USER_SUCCESS,
                payload: infoUser
            })
           
        } catch (error) {
            console.log(error)
            return dispach({
                type: REGISTER_USER_ERROR,
            })
        }
    }
}

 export const resetPassword =  (email) => {
     return async function (dispatch){
     try{
         const config = {
             headers: {
                 "Content-Type": "application/json"
             }
         }
         const body = {email}
         const res = await axios.post(`http://localhost:3001/reset`, body, config)
         dispatch({
             type: RESET_PASSWORD,
             payload: res.data
         })
     } catch (error) {
        dispatch({
            type: RESET_PASSWORD,
            payload: error.message
        })
     }
    }
}

export const reloadingPage = (payload)=> {
    return {
      type:RELOADING_PAG,
      payload
    }
}