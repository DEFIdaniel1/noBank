import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  changeQuantityStaked,
  changeMonths,
} from "../../store/calculatorSlice";

import useFormatNumber from "../helper/useNumberFormat";
import CryptoSelector from "./CryptoSelector";

const StakingCalc = () => {
  const dispatch = useAppDispatch();
  const loadingState = useAppSelector((state) => state.fetchToken.loading);
  const tokenPrice = useAppSelector((state) => state.changeToken.price);
  const tokenName = useAppSelector((state) => state.changeToken.name);

  const activeMonth = useAppSelector((state) => state.calculator.months);

  const tokenValueWithCommas = useFormatNumber(tokenPrice.toFixed(2));

  const quantityStakedInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(changeQuantityStaked(e.target.value));
  };

  const change1MonthHandler = () => {
    dispatch(changeMonths(1));
  };
  const change6MonthHandler = () => {
    dispatch(changeMonths(6));
  };
  const change12MonthHandler = () => {
    dispatch(changeMonths(12));
  };
  const monthButtonClasses = "calc-form__month-selector-item";

  return (
    <div className="calc-form">
      <h3>Select Your Crypto</h3>
      {loadingState && <h4>Loading price...</h4>}
      {!loadingState && (
        <div>
          <h4>{`${tokenName} Price: $${tokenValueWithCommas}`}</h4>
        </div>
      )}
      <CryptoSelector />
      <form action="">
        <label htmlFor="">
          <h3>Quantity Staked</h3>
        </label>
        <input
          type="number"
          placeholder="0.00"
          onChange={quantityStakedInputHandler}
        />
      </form>
      <div>
        <h3>Months</h3>
        <div className="calc-form__month-selector">
          <div
            className={
              activeMonth === 1
                ? `${monthButtonClasses} active`
                : monthButtonClasses
            }
            onClick={change1MonthHandler}
          >
            1 Month
          </div>
          <div
            className={
              activeMonth === 6
                ? `${monthButtonClasses} active`
                : monthButtonClasses
            }
            onClick={change6MonthHandler}
          >
            6 Months
          </div>
          <div
            className={
              activeMonth === 12
                ? `${monthButtonClasses} active`
                : monthButtonClasses
            }
            onClick={change12MonthHandler}
          >
            12 Months
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingCalc;
