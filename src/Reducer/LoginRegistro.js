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
                    userInfo: action.payload
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
                return {
                    ...state,
                    token: null,
                    isAuth: false,
                    detalleUsuario: null,
                }
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
                console.log(idPasajera)
            return {
                ...state,
                pasajera: pasajera

            }                       
                
            default: return state;
    }
}