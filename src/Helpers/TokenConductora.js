export default function tokenConductora(){
    if(localStorage.tokenConductora){
        return {
            headers:{
            "x-auth-token":localStorage.tokenConductora
            }
        }
    }

}