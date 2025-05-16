import React from 'react'
import './subscriber.css'
const Subscriber = () => {
  return (
    <div className="subscribeContainer">
      <div>
        <h2>Subscribe</h2>
        <p
          style={{
            fontSize: "13px",
            color: "#5f5f60",
            fontFamily: "500",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          molestiae rem quidem fuga dolor ipsa consequatur in libero sed magnam.
        </p>
        <div className="space-x-2">
          <input placeholder="Enter Your Email Address" />
          <button className="buttonSub">Subcribe Now</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Subscriber;