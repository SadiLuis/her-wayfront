import { combineReducers } from "redux";
//import pedirConductoraReducer  from "./pedirConductora";
import recorridoReducer from "./recorridoReducer";
import LoginRegisReducer from "./LoginRegistro";
import adminReducer from "./adminReducer";
import perfilConductoraReducer from "./PerfilConduc";
import registroConductoraReducer from "./registroConductoraReducer"
import pedirConductoraReducer from "./pedirConductora";
import viajesReducer from "./viajes";





const rootReducer= combineReducers({
   
    recorridoReducer,
    LoginRegisReducer,
    adminReducer,
    perfilConductoraReducer,
    registroConductoraReducer,
    viajesReducer,
    pedirConductoraReducer
})


export default rootReducer;

