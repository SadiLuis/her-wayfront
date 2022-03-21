import axios from "axios";

export function getAllConductoras(){
    return async function(dispatch){
        try{
            const conductoras = await axios.get('http://localhost:3001/conductoras')
            return dispatch({
                type:'GET_ALL_CONDUCTORAS',
                payload: conductoras.data
            })

        }catch(err){
            console.log(err)
        }
    }
};
export function getConductorasName(name){
    try{
        return async function (dispatch){
            const json = await axios.get('http://localhost:3001/conductoras?name=' + name);
            return dispatch({
                type:'GET_CONDUNCTORAS_NAME',
                payload: json.data
            }
            )
        }
    }catch(err){
        console.log(err)
    }
}

export function conductorasDetail(id){
    try{
        return async function (dispatch){
            const detail = await axios.get('http://localhost:3001/conductoras/' + id);
            return dispatch({
                type: 'CONDUCTORAS_DETAIL',
                payload: detail.data,
            })
        }
    }catch(err){
        console.log(err)
    }  
}

export function postConductoras(payload){
    try{
        return async function (dispatch){
            const create = await axios.post('http://localhost:3001/conductoras/register' + payload);
            return dispatch({
                type:'POST_CONDUCTORAS',
                create,
            })
        }
    }catch(err){
        console.log(err)
    }  
}
