import React from "react";
import "./appLayout.css";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";

const ApplayoutMain = () => {
  return (
    <div className="appLayoutMain">
      <div className="header">
        <Header />
      </div>

      <main className="layoutMain">
        <Outlet />
      </main>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ApplayoutMain;
