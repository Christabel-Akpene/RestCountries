import { Routes, Route } from "react-router"
import Layout from "./Pages/Layout"
import HomePage from "./Pages/HomePage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
