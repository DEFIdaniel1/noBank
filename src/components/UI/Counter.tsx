import React from "react";
import "./Counter.scss";
// import { CountValue } from "../../models/propTypes";

const Counter: React.FC<{ countValue: number }> = (props) => {
  const counterArray = document.querySelectorAll(".counter") as any;
  const slowIncrement = 1;

  counterArray.forEach((counter: any) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target") as number;
      const count = +counter.innerText as number;

      if (count < target) {
        counter.innerText = count + slowIncrement;
        setTimeout(updateCount, 0.001);
      } else {
        counter.innerText = target;
      }

      if (count > target) {
        counter.innerText = count - slowIncrement;
        setTimeout(updateCount, 0.00001);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  return (
    <div className="counter" data-target={props.countValue}>
      0
    </div>
  );
};

export default Counter;
