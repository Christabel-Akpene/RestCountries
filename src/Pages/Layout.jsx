import Header from "../Components/Header"
import { Outlet } from "react-router"
const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout