import React, { useEffect, useState } from "react";
import "../home.css";
import { mainCrosualData, type InfoCard } from "./module";
import { ChevronLeft, ChevronRight } from "lucide-react";
const HomeCrosual = () => {
  const [crosualPosition, setPosition] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setPosition((prev) =>
      prev === mainCrosualData.length - 1 ? 0 : prev + 1
    );
  }, 3000); // change slide every 3 seconds

  return () => clearInterval(interval); // cleanup on unmount
}, []);
  return (
    <div className="main">
      <div className="crosualMain bg-gray-200">
        <button
          className="leftBtn flex-center"
          onClick={() => {
            if (crosualPosition !== 0) {
              setPosition(crosualPosition - 1);
            } else {
              setPosition(crosualPosition);
            }
          }}
        >
          <ChevronLeft />
        </button>
        <div className="gridCrosual">
          <div className="gridColspan3 content ">
            <h2>{mainCrosualData[crosualPosition]?.name}</h2>
            <p className="contentPara">
              {mainCrosualData[crosualPosition]?.description}
            </p>
            <button
              className="contentbtn btnStyle"
              disabled={crosualPosition === 0}
            >
              {mainCrosualData[crosualPosition]?.btnName}
            </button>
          </div>
          <div className="gridColspan2 imageSection">
            <img
              src={mainCrosualData[crosualPosition]?.imageUrl}
              alt={mainCrosualData[crosualPosition]?.name}
            />
          </div>
        </div>
        <button
          className="rightBtn flex-center"
          onClick={() => {
            if (crosualPosition !== mainCrosualData?.length - 1) {
              setPosition(crosualPosition + 1);
            } else {
              setPosition(crosualPosition);
            }
          }}
          disabled={crosualPosition === mainCrosualData?.length - 1}
        >
          <ChevronRight />
        </button>

        <div className="dotMain flex-center">
          {mainCrosualData.map((cur, index) => (
            <span
              className={`dot ${index === crosualPosition ? "active" : ""}`}
              key={cur?.name}
              onClick={() => setPosition(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCrosual;
