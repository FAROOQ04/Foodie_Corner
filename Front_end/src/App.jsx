import { Route, Routes } from "react-router-dom"
import Nav from "./Components/Header/Nav"
import Home from "./Components/Home/Home"
import ExploreFood from "./Components/ExploreFood/ExploreFood"
import About_us from "./Components/About_us/About_us"
import Login from "./Components/Login/Login"
import Sign_in from "./Components/Sign_in/Sign_in"
import Footer from "./Components/Footer/Footer"

function App() {
  

  return (
    <>
    <div>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Explore_Food" element={< ExploreFood/>}/>
      <Route path="/About_us" element={<About_us/>}/>
      <Route path="/Sign_in" element={<Sign_in/>}/>
      <Route path="/Log_in" element={<Login/>}/>
    </Routes>
    <Footer/>
    </div>
  
    </>
  )
}

export default App
