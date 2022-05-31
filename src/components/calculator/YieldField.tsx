import { useAppSelector } from "../../store/hooks";
import useFormatNumber from "../helper/useNumberFormat";

const YieldField = () => {
  const quantityStaked = useAppSelector(
    (state) => state.calculator.quantityStaked
  );
  const yieldPercentage = useAppSelector(
    (state) => state.calculator.yieldPercentage
  );
  const activeMonth = useAppSelector((state) => state.calculator.months);
  const tokenValue = useAppSelector((state) => state.changeToken.price);
  // const yieldTotal = useAppSelector((state) => state.calculator.yieldTotal);
  const annualYield =
    (Number(quantityStaked) * Number(yieldPercentage) * tokenValue) / 100;
  const formattedYield = useFormatNumber(annualYield.toFixed(2));
  const monthlyYield = Number(annualYield) / 12;
  const sixMonthYield = monthlyYield * 6;
  const twelveMonthYield = monthlyYield * 12;
  const monthlyYieldPercentage = yieldPercentage / 12;
  const sixMonthYieldPercentage = monthlyYieldPercentage * 6;
  console.log(sixMonthYieldPercentage);

  return (
    <div className="calc-right">
      <div className="total-yield-box">
        <h3>Total Yield</h3>
        <div className="total-yield-box__value">
          ${activeMonth === 12 && formattedYield}
          {activeMonth === 6 && sixMonthYield.toFixed(2)}
          {activeMonth === 1 && monthlyYield.toFixed(2)}
        </div>
        <div className="total-yield-box__gain">
          {activeMonth === 12 && yieldPercentage.toFixed(1)}
          {activeMonth === 6 && sixMonthYieldPercentage.toFixed(1)}
          {activeMonth === 1 && monthlyYieldPercentage.toFixed(1)}% Gain
        </div>
      </div>
      <div className="yield-box">
        <div className="yield-box-inner">
          <div>Monthly Yield</div>
          <div className="yield-box__value">${monthlyYield.toFixed(2)}</div>
        </div>
        <div className="yield-box-inner">
          <div>APY</div>
          <div className="yield-box__value">{yieldPercentage}%</div>
        </div>
        <div className="yield-box-inner">
          <div>Annual Yield</div>
          <div className="yield-box__value">${twelveMonthYield.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default YieldField;
