import { combineReducers } from "redux";
//import pedirConductoraReducer  from "./pedirConductora";
import recorridoReducer from "./recorridoReducer";
import LoginRegisReducer from "./LoginRegistro";





const rootReducer= combineReducers({
    //conductoras: pedirConductoraReducer,
    recorrido: recorridoReducer,
    LoginRegisReducer,
})




export default rootReducer;

