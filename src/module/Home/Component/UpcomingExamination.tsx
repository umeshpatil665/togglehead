import React, { useEffect, useState } from "react";
import "./upcomingExamination.css";
import {
  CardData,
  upcomingExams,
  type CardProps,
  type UpcommingInterface,
} from "./module";
import { CalendarClock, ChevronRight } from "lucide-react";
const UpcomingExamination = () => {
    const [startIndex,setStartIndex]=useState(0);
    const[lastIndex,setLastIndex]=useState(4);

useEffect(() => {
  const interval = setInterval(() => {
    setStartIndex(prevStart => {
      if (prevStart < CardData.length - 4) {
        return prevStart + 1;
      } else {
        return 0; // Reset to start
      }
    });

    setLastIndex(prevLast => {
      if (prevLast < CardData.length) {
        return prevLast + 1;
      } else {
        return 4; // Reset to initial last index
      }
    });
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <div>
    <div className="upcommingMain">
      <div className="gridColspan1 upcomming">
        <h2>Upcomming Examination</h2>
        <p style={{}} className="upcommingP">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          dolore eum harum facilis libero ad repellat temporibus quam eligendi
          fugit.
        </p>
      </div>
      <div className="gridColspan4 upcommingExam flex-justify-between" style={{marginLeft:"15px"}}>
        {upcomingExams.map((cur: UpcommingInterface, index: number) => (
          <div key={index} className="flex-center space-x-1">
            <div>
              <CalendarClock className="upcommingExamIcon" />
            </div>
            <div>
              <h3>{cur?.data}</h3>
              <div
                style={{ marginTop: "-15px", fontSize: "14px", color: "gray" }}
              >
                {cur?.exam.map((ex: string, ind: number) => (
                  <div key={ex} style={{ marginTop: "5px" }}>
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </div>

      <div className="flex-justify-between space-x-2" style={{
        padding:"0px 80px",
        marginTop:"10px"
      }}>
        {CardData.slice(startIndex,lastIndex).map((cur: CardProps, index: number) => (
          <div className="card" key={index}>
            <div>
              <h3>{cur?.title}</h3>
              <p>{cur?.description}</p>
            </div>
            <div className="know-more">
              {cur?.btnName}
              <span className="arrow-btn">
                <ChevronRight />
              </span>
            </div>
          </div>
        ))}
      </div>

       </div>
  );
};

export default UpcomingExamination;
