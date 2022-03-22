import { GET_PERFILC } from '../actions/conductora'

const initialState = {
    user: [],
    conductora: [],
    perfilConductora: []
}


function PerfilConductora(state = initialState, action) {
    switch (action.type) {
        case GET_PERFILC:
            return {
                ...state,
                perfilConductora: action.payload
            }
        default:
            break;
    }
}

export default PerfilConductora;
