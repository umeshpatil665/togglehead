import React, { useState } from "react";
import { FaqData, type FaqProps } from "./module";
import { Minus, Plus } from "lucide-react";
import "./faq.css";
const Faq = () => {
  const [faqIndex, setFaqIndex] = useState<number | null>(0);
  return (
    <div className="faqContainer">
        <h2 style={{textAlign:"center"}}>FAQ</h2>
      {FaqData.map((cur: FaqProps, index: number) => (
        <div key={index}>
          <div>
            <div
              className="flex-justify-between faqQuention"
              onClick={() => {
                if (index === faqIndex) {
                  setFaqIndex(null);
                } else {
                  setFaqIndex(index);
                }
              }}
            >
              <div>{cur?.quetion}</div>
              <div>{index !== faqIndex ? <Plus /> : <Minus />}</div>
            </div>
            <hr />
          </div>

          <div
            className={`${index !== faqIndex ? "inactiveFaq" : "activeFaq"}`}
          >
            <div className={`answer }`}>{cur?.answer}</div>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
