import {
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
    LOGOUT_USER,
    GET_USER_DETAILS,
    AUTHENTICATION_ERROR,
    UPDATE_USER,
    REFORCE_PASSWORD,
    GET_USERS
} from "../actions/index";

const initialState = {
    token: localStorage.getItem("token"),
    isAuth: null,
    detalleUsuario: null,
    reforPass: [],
    userInfo: [],
}

export default function LoginRegisReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DETAILS:
            return {
                ...state,
                isAuth: true,
                userInfo: action.payload.user
            }
            case LOGIN_USER_SUCCESS:
                localStorage.setItem("token", action.payload.idToken)
                return {
                    ...state,
                    isAuth: true,
                    token: action.payload.idToken,
                    userInfo: action.payload.user
                }
            case REGISTER_USER_SUCCESS:
                localStorage.setItem("token", action.payload.idToken);
                return {
                    ...state,
                    token: action.payload.idToken,
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
            case REFORCE_PASSWORD:
                return {
                    ...state,
                    reforPass: action.payload
                }
                
            default: return state;
    }
}