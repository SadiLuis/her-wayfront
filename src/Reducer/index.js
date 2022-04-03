import { combineReducers } from "redux";
import recorridoReducer from "./recorridoReducer";
import LoginRegisReducer from "./LoginRegistro";
import adminReducer from "./adminReducer";
import perfilConductoraReducer from "./PerfilConduc";
import registroConductoraReducer from "./registroConductoraReducer"
import pedirConductoraReducer from "./pedirConductora";
import viajesReducer from "./viajes";
import reviewsReducer from "./reviewsReducer";





const rootReducer= combineReducers({
    recorridoReducer,
    LoginRegisReducer,
    adminReducer,
    perfilConductoraReducer,
    registroConductoraReducer,
    pedirConductoraReducer,
    viajesReducer,
})


export default rootReducer;

