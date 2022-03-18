import { PEDIR_CONDUCTORA } from "../actions";

const initialState={
    todasLasConductoras:[],
    conductoras:[]
}

export default function pedirConductoraReducer(state=initialState, action){

    switch(action.type){
        case PEDIR_CONDUCTORA:
            return {
                ...state,
                todasLasConductoras: action.payload,
                conductoras: action.payload
            }
        default:
            return state;
    }
}