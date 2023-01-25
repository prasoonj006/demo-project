import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import PlayerPage from "../Components/PlayerPage/PlayerPage";


const CustomRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/player' element={<PlayerPage/>} />
        <Route path = '*' element = {"No page found"} />
      </Routes>
    );
  };
  
  export default CustomRoutes;