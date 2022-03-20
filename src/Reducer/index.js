import { combineReducers } from "redux";
import pedirConductoraReducer  from "./pedirConductora";
import recorridoReducer from "./recorridoReducer";


const rootReducer= combineReducers({
    conductoras: pedirConductoraReducer,
    recorrido: recorridoReducer,
})
export default rootReducer;