import {
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
    LOGOUT_USER,
    GET_USER_DETAILS,
    AUTHENTICATION_ERROR,
    UPDATE_USER,
    RESET_PASSWORD,
    RELOADING_PAG,
    GET_PASAJERA,
    DELETE_PASAJERA    
} from "../actions/index";

const initialState = {
    token: localStorage.getItem("token"),
    isAuth: null,
    detalleUsuario: null,
    pasajera: [],
    resetPass: [],
    userInfo: [],
    conductora: [],
    allconductoras: [],
    filters: [],
    detail: [],
    error: '', 
    usuariaLogueada: []
}

export default function LoginRegisReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DETAILS:
            return {
                ...state,
                isAuth: true,
                detalleUsuario: action.payload
            }
            case LOGIN_USER_SUCCESS:

                localStorage.setItem("token", action.payload.stsTokenManager.accessToken)
                console.log(action.payload)

                return {
                    ...state,
                    isAuth: true,
                    token: action.payload.stsTokenManager.accessToken,
                    userInfo: action.payload,
                    usuariaLogueada: action.usuariaLogueada
                }
            case REGISTER_USER_SUCCESS:
                localStorage.setItem("token", action.payload.stsTokenManager.accessToken);
                return {
                    ...state,
                    token: action.payload.stsTokenManager.accessToken,
                    isAuth: true,
                }
            case LOGIN_USER_ERROR:
            case REGISTER_USER_ERROR:
            case AUTHENTICATION_ERROR:
            case LOGOUT_USER:
                localStorage.removeItem("token");
                localStorage.removeItem("usuarios")
                localStorage.removeItem("state")

                return initialState

            case UPDATE_USER:
                return {
                    ...state,
                    detalleUsuario: action.payload
                }
            case RESET_PASSWORD:
                return {
                    ...state,
                    resetPass: action.payload
                }
            case RELOADING_PAG:
                return {
                    ...state,
                    resetPass: action.payload
                }
                
                 case GET_PASAJERA: 
                 const idPasajera = state.userInfo.uid
                const pasajera = action.payload.filter(p => p.authId === idPasajera)
                console.log(pasajera)
            return {
                 ...state,
                usuariaLogueada: pasajera

           }   
            case DELETE_PASAJERA: 
            localStorage.clear()
            localStorage.removeItem("token");
            localStorage.removeItem("usuarios")
            localStorage.removeItem("state")
              console.log('state')

            return initialState
                      
                
            default: return state;
    }
}