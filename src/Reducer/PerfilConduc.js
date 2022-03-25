import { GET_PERFILC, 
    // LOGIN_COND_SUCCESS, 
    // LOGIN_COND_ERROR,
    // GET_ALL_CONDUCTORAS,
    // //GET_CONDUNCTORAS_NAME,
    // //CONDUCTORAS_DETAIL,
    // POST_CONDUCTORAS, 
} from '../actions/conductora'

const initialState = {
    user: [],
    token: localStorage.getItem("token"),
    isAuth: null,
    userInfo:[],
    conductora: [],
    perfilConductora: [],
    // conductoras: [],
    // allconductoras: [],
    // filters: [],
    // detail: []
}


function PerfilConductora(state = initialState, action) {
    switch (action.type) {
        case GET_PERFILC:
            return {
                ...state,
                perfilConductora: action.payload,
                //conductoras: action.payload,
                    //filter: action.payload
            }
            // case LOGIN_COND_SUCCESS:
            //     //localStorage.setItem("token", action.payload.idToken)
            //     console.log(action.payload)
            //     return {
            //         ...state,
            //         isAuth: true,
            //         token: action.payload.stsTokenManager.accessToken,
            //         allConductoras: action.payload,
            //         conductoras: action.payload,
            //         userInfo: action.payload,
            //         filter: action.payload
            //     }
               //case LOGIN_COND_ERROR:
        
            // case GET_ALL_CONDUCTORAS:
            //     return{
            //         ...state,
            //         allconductoras: action.payload,
            //         //userInfo: action.payload,
            //         //filters: action.payload
            //     }
            //     // case GET_CONDUNCTORAS_NAME:
            //     //     return {
            //     //         ...state,
            //     //         filters: action.payload,
            //     //         allconductoras: action.payload
            //     //     }
            //     //  case CONDUCTORAS_DETAIL:
            //     //      return{
            //     //          ...state,
            //     //          allconductoras: action.payload,
            //     //          detail: action.payload
            //     //      } 
            //      case POST_CONDUCTORAS:
            //          return{
            //              ...state,
                    // } 
        default:
            break;
    }

}

export default PerfilConductora;
