import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
const Body = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="w-60">
      <Sidebar />
      </div>
      <div className="overflow-y-scroll">
      <Outlet />
      </div>
      
    </div>
  )
}

export default Body