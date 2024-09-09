import { useDispatch } from "react-redux"
import { logoutUser } from "../reducers/userReducer"

const UserPage = () => {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutUser())
    }

    return (
        <>
        <h1>Welcome</h1>
        <h2>todo task List</h2>
        <button
            onClick={logout}
        >
            logout
        </button>
        </>
    )
}

export default UserPage