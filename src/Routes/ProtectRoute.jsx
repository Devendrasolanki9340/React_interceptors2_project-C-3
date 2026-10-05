import { Outlet ,Navigate } from "react-router-dom"
import { useContext } from "react"
import { Auth } from "../Context/AuthContext"



const ProtectRoute = () => {
    const {loggedInUser} = useContext(Auth);

    

    if (!loggedInUser) {
        return <Navigate to="/" />;
    }

  return <Outlet/>
}

export default ProtectRoute
