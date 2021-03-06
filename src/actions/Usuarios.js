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
    GET_PASAJERA,
    //REFORCE_PASSWORD
    DELETE_PASAJERA,
    RESET_PASSWORD,
    RELOADING_PAG,
   

} from "../actions/index";
import {SERVER} from './VariableGlobal'
import Swal from "sweetalert2";



export function updateUser(newUser) {
    return async function (dispach) {
        try {
            await axios.put(`${SERVER}/${newUser.id}`, newUser, tokenUser())
            dispach(getuserDetails())
            return {

                type: UPDATE_USER,
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export function getuserDetails(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${SERVER}/usuario/${id}`)

            dispatch({
                type: GET_USER_DETAILS,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: AUTHENTICATION_ERROR,
            })

        }
    }
}


export function logout() {
    return { type: LOGOUT_USER }
}

export function login({ email, contrasena }) {
    return async (dispach) => {
        console.log('action')
        try {

            // const config = {
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // }

            const body = { email, contrasena }
            const { data } = await axios.post(`${SERVER}/usuario/login`, body)
            const usuarias = await axios.get(`${SERVER}/usuario`)
            const infoUser = data.user
            const filtroUsuarias = usuarias.data.filter((u) => infoUser.email === u.email)
            console.log('data', data)
            dispach({
                type: LOGIN_USER_SUCCESS,
                payload: infoUser,
                usuariaLogueada: filtroUsuarias,
            },
            localStorage.setItem('usuarios', JSON.stringify(data)))
            console.log(data)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos',
                text: 'La contrase??a o el correo son incorrectos!',
               
              })
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
    fotoPerfil,
    pais,
    provincia,
    direccion,
    telefono,
    localidad
}) {

    return async function (dispatch) {
        try {
        
            const body = {
                nombre,
                usuario,
                contrasena,
                email,
                fotoPerfil,
                pais,
                provincia,
                direccion,
                telefono,
                localidad
            }

            const { data } = await axios.post(`${SERVER}/usuario/register`, body)

            const infoUser = data.user
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: infoUser
            },
            localStorage.setItem('usuarios', JSON.stringify(data)))
            
        } catch (error) {
            console.log(error)
            return dispatch({
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
         const res = await axios.post(`${SERVER}/reset`, body, config)
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

export const getPasajera = () => {
    return async function (dispatch){
        try{
         const res = await axios.get(`${SERVER}/usuario`)
            dispatch({
                type: GET_PASAJERA,
                payload: res.data
            })
        } catch (error) {
          console.log(error)
        }
       }

}

export const updateFoto = async(foto , id)=> {
    const body = {fotoPerfil: foto}
        try{
         const res = await axios.put(`${SERVER}/usuario/updateFoto/${id}`,body)
            console.log(res)
            
        } catch (error) {
          console.log(error)
        }
      
}

export const updatePasajera = async(form , id)=> {
   
        try{
         const res = await axios.put(`${SERVER}/usuario/update/${id}`,form)
         console.log(res)
         Swal.fire({
            icon: 'success',
            title: 'Perfil actualizado',
        
           
          })
            
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al actualizar el perfil ',
                
               
              })
        }
      
}

export const deletePasajera =  id => dispatch => {
    return axios.delete(`${SERVER}/usuario/delete/${id}`)
    .then(res => res.data)
    .then(data => dispatch({type:DELETE_PASAJERA , payload: data}))
    .catch(err => console.log(err))
    
    }