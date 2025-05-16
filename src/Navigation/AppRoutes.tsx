
import React from "react";



import { Navigate, Route, Routes } from "react-router-dom";


import ApplayoutMain from "../module/Layout/ApplayoutMain";
import HomeMain from "../module/Home/HomeMain";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<ApplayoutMain />}>
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeMain />} />
   
        </Route>
      </Routes>
    </>
  );
};

export default AppRoute;
