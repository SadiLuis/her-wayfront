import { combineReducers } from "redux";
import pedirConductoraReducer  from "./pedirConductora";
import recorridoReducer from "./recorridoReducer";
import LoginRegisReducer from "./LoginRegistro";
import adminReducer from "./adminReducer";
import perfilConductoraReducer from "./PerfilConduc"
import viajesReducer from "./viajes";






const rootReducer= combineReducers({
    pedirConductoraReducer,
    recorridoReducer,
    LoginRegisReducer,
    adminReducer,
    perfilConductoraReducer,
    viajesReducer

})


export default rootReducer;

