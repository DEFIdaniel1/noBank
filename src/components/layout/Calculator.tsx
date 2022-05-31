// import { useState } from "react";

import "./Calculator.scss";
import StakingCalc from "../calculator/StakingCalc";
// import { TokenAction } from "../../models/action-types";
// import { TokenState } from "../../models/propTypes";

import Card from "../UI/Card";
// import Button from "../UI/Button";
import YieldField from "../calculator/YieldField";

const Calculator = () => {
  // const [calcType, setCalcType] = useState("staking");

  // let inactiveCalcType;
  // if (calcType === "staking") {
  //   inactiveCalcType = "Borrow";
  // } else {
  //   inactiveCalcType = "Staking";
  // }
  // const calcButtonToggle = () => {
  //   calcType === "staking" ? setCalcType("borrow") : setCalcType("staking");
  // };

  const borrowCalc = (
    <div className="calc__borrow">
      <h3>Select Your Crypto</h3>
      <form action="" className="calc__borrow-form">
        <label htmlFor="">Quantity</label>
        <input type="text" />
        <label htmlFor="">Yield</label>
        <input type="text" />
        <label htmlFor="">Months</label>
        <input type="text" />
        <label htmlFor="">Earned</label>
        <input type="text" />
      </form>
    </div>
  );

  return (
    <Card className="dark-blue">
      <div id="calculator">
        <h1>Yield Calculator</h1>
        <Card className="white calc-box">
          <div className="calc-left">
            <div className="calc-left-heading">
              <div className="calc-left-heading-active">Staking</div>
              {/* <div onClick={calcButtonToggle}>
                <Button className="calc-left-heading-inactive btn-pink">
                  Check {inactiveCalcType} Rates
                </Button>
              </div> */}
            </div>
            <StakingCalc />
            {/* {calcType === "borrow" && borrowCalc} */}
          </div>
          <YieldField />
        </Card>
      </div>
    </Card>
  );
};

export default Calculator;
