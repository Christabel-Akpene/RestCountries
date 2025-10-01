import Header from "../Components/Header"
import { Outlet } from "react-router"
const Layout = ({toggleTheme, theme}) => {
  return (
    <div>
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <Outlet/>

    </div>
  )
}

export default Layout