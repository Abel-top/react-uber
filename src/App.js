import React from "react";
import './App.css'
import { BrowserRouter,Outlet,Route,Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";

const Layout =()=>{
  return (<>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>)
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='' element ={<Layout/>}>
         <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
