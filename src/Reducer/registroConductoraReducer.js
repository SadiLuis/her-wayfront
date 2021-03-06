import {REGISTRO_CONDUCTORA,
        LOGIN_CONDUCTORA,
        LOGOUT_CONDUCTORA
} from '../actions/index'


const initialState = {
    tokenCnductora: localStorage.getItem("token"),
    isAuthConductora: null,
    registroCond:[],
    conducLogueada:[]
}

export default function registroConductoraReducer (state = initialState, action){
    switch (action.type) {
        case REGISTRO_CONDUCTORA:
            
            return {
                ...state,
                tokenCnductora: action.payload.stsTokenManager.accessToken,
                isAuthConductora: true,
                registroCond: action.payload
            }

            case LOGIN_CONDUCTORA:
                
                console.log(action.payload)
                return {
                    ...state,
                    isAuthConductora: true,
                    tokenConductora: action.payload.stsTokenManager.accessToken,
                    registroCond: action.payload,
                    conducLogueada: action.conducLogueada
                }

            case LOGOUT_CONDUCTORA:
                localStorage.removeItem("token");
                return{
                    ...state,
                    tokenCnductora: null,
                    isAuthConductora: false,
                    coducLogueada: null 
                }
                
                default:
                    return state;
    }
    }