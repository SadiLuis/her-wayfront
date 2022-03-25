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
    LOGIN_COND_SUCCESS, 
    LOGIN_COND_ERROR,
    GET_ALL_CONDUCTORAS,
    //GET_CONDUNCTORAS_NAME,
    //CONDUCTORAS_DETAIL,
    POST_CONDUCTORAS,    
    GET_USERS
} from "../actions/index";

const initialState = {
    token: localStorage.getItem("token"),
    isAuth: null,
    detalleUsuario: null,
    resetPass: [],
    userInfo: [],
    conductoras: [],
    allconductoras: [],
    filters: [],
    detail: []
    
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
                case LOGIN_COND_SUCCESS:
                    //localStorage.setItem("token", action.payload.idToken)
                    console.log(action.payload)
                    return {
                        ...state,
                        isAuth: true,
                        token: action.payload.stsTokenManager.accessToken,
                        allConductoras: action.payload,
                        conductoras: action.payload,
                        //userInfo: action.payload,
                        //filter: action.payload
                    }
                    case LOGIN_COND_ERROR:
            
                case GET_ALL_CONDUCTORAS:
                    return{
                        ...state,
                        allconductoras: action.payload,
                        //userInfo: action.payload,
                        //filters: action.payload
                    }
                    // case GET_CONDUNCTORAS_NAME:
                    //     return {
                    //         ...state,
                    //         filters: action.payload,
                    //         allconductoras: action.payload
                    //     }
                    //  case CONDUCTORAS_DETAIL:
                    //      return{
                    //          ...state,
                    //          allconductoras: action.payload,
                    //          detail: action.payload
                    //      } 
                     case POST_CONDUCTORAS:
                         return{
                             ...state,
                         } 
               
                
            default: return state;
    }
}