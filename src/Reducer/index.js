const initialState = {
    conductoras: [],
    allconductoras: [],
    filters: [],
    detail: []
}

export default function rootReducer(state = initialState, action) {
switch(action.type){
    case 'GET_ALL_CONDUCTORAS':
        return{
            ...state,
            allconductoras: action.payload,
            filters: action.payload
        }
        case 'GET_CONDUNCTORAS_NAME':
            return {
                ...state,
                filters: action.payload,
                allconductoras: action.payload
            }
         case 'CONDUCTORAS_DETAIL':
             return{
                 ...state,
                 allconductoras: action.payload,
                 detail: action.payload
             } 
         case 'POST_CONDUCTORAS':
             return{
                 ...state,
             } 
        default:
            return state         
}


}
