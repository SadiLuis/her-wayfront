import { PEDIR_CONDUCTORA } from "../actions";

const initialState={
    todasLasConductoras:[],
    conductoras:[]
}

export default function pedirConductoraReducer(state=initialState, action){
    const {type, payload}=action;
    switch(type){
        case PEDIR_CONDUCTORA:
            return {
                ...state,
                todasLasConductoras:payload,
                conductoras:payload
            }

    }
}