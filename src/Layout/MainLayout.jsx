
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"


const MainLayout = () => {
  return (
    <div className="h-screen p-2 flex  grid-cols-[1fr_7fr]">
      <Navbar />
      <div className="h-full p-2 overflow-auto">
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
