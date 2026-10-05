import { useContext } from "react"
import {  NavLink } from "react-router-dom"
import { Auth } from "../Context/AuthContext"
import { toast } from "react-toastify"



const Navbar = () => {
  const {setLoggedInUser}= useContext(Auth)

  return (
    <div className="border-r border-gray-500 flex justify-between flex-col p-3 ">

      <div className="flex flex-col gap-10">

        <h1 className="text-xl font-semibold">E-Comm</h1>
        <div className="flex flex-col gap-6 ml-5">

            <NavLink className={({isActive}) => isActive ? "font-semibold text-red-500  border-b border-gray-500":    "text-black border-b border-gray-500"
            }
             to={"/main"} end >Home</NavLink>

            <NavLink className={({isActive}) => isActive ? "font-semibold text-red-500  border-b border-gray-500":    "text-black border-b border-gray-500"
            }
            to={"/main/users"}>Users</NavLink>

            <NavLink className= {({isActive}) => isActive ? "font-semibold text-red-500  border-b border-gray-500":    "text-black border-b border-gray-500"
            }
             to={"/main/products"}>Products</NavLink>

             </div>
             
        </div>

        <button onClick={()=> {
            localStorage.removeItem("loggedinUser")
            toast.warn("User logged out")
            setLoggedInUser(null)
          }
        }
         className="py-4 bg-red-500 text-white rounded cursor-pointer">Logout</button>
      

    </div>
  )
}

export default Navbar
