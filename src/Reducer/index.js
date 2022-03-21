import { GET_PERFILC } from '../actions/conductora'

const initialState = {
    user: [],
    conductora: [],
    perfilConductora: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PERFILC:
            return {
                ...state,
                getPerfilConductora: action.payload
            }
    }
}
