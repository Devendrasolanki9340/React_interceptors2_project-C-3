

import { Outlet ,Navigate } from "react-router-dom"
import { useContext } from "react"
import { Auth } from "../Context/AuthContext"



const PublicRoute = () => {
    const {loggedInUser} = useContext(Auth);

    

    if (loggedInUser) {
        return <Navigate to="/main" />;
    }

  return <Outlet/>
}

export default PublicRoute
