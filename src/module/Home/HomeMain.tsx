import React from "react";
import HomeCrosual from "./Component/HomeCrosual";
import "./home.css";
import UpcomingExamination from "./Component/UpcomingExamination";
import History from "./Component/History";
import Faq from "./Component/Faq";
import Subscriber from "./Component/Subscriber";
const HomeMain = () => {
  return (
    <div className="main">
      <HomeCrosual />
      <UpcomingExamination />
     <History/>
     <Faq />
     <Subscriber/>
    </div>
  );
};

export default HomeMain;
