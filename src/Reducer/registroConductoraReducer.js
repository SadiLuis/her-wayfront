import {REGISTRO_CONDUCTORA,
        LOGIN_CONDUCTORA,
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
            localStorage.setItem("token", action.payload.stsTokenManager.accessToken);
            return {
                ...state,
                tokenCnductora: action.payload.stsTokenManager.accessToken,
                isAuthConductora: true,
                registroCond: action.payload
            }

            case LOGIN_CONDUCTORA:
                localStorage.setItem("tokenConductora", action.payload.stsTokenManager.accessToken)
                console.log(action.payload)
                return {
                    ...state,
                    isAuthConductora: true,
                    tokenCnductora: action.payload.stsTokenManager.accessToken,
                    registroCond: action.payload,
                    conducLogueada: action.conducLogueada
                }
                
                default:
                    return state;
    }
    }