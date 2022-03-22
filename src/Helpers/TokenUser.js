export default function tokenUser() {
    if (localStorage.tokenUser) {
        return {
            headers: {
                "x-auth-token": localStorage.tokenUser
            }
        }
    }
}