import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { updateToken } from "../../store/testTokenSlice";

import "./Calculator.scss";
// import { TokenAction } from "../../models/action-types";
// import { TokenState } from "../../models/propTypes";
import { getTokenInfo } from "../../store/fetchDataSlice";
// import findPrice from "../helper/findPrice";
// import ApiRequest from "../API/ApiRequest";

import Card from "../UI/Card";
import Button from "../UI/Button";

import bitcoin from "../../images/icons/bitcoin.png";
import eth from "../../images/icons/eth.svg";
import solana from "../../images/icons/solana.png";
import cardano from "../../images/icons/cardano.png";
import usdc from "../../images/icons/usdc.png";

// change borrow/staking button back to calcbuttontoggle
//dispatch isn't working like it should

const Calculator = () => {
  const dispatch = useAppDispatch();
  const tokenPrice = useAppSelector((state) => state.changeToken.price);
  const tokenName = useAppSelector((state) => state.changeToken.name);

  //////////////////TEST////////////////////////////////////////////////////////////////////////////////////////////////////
  const getPrice = (data: any, name: string) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === name) {
        const tokenPrice: number = data[i]["current_price"];
        const tokenName: string = data[i]["name"];
        console.log(tokenPrice);
        dispatch(
          updateToken({
            payload: { name: tokenName, price: tokenPrice },
          })
        );
        console.log(tokenName);
        return { tokenName, tokenPrice };
      }
    }
  };
  const getPriceHandler = (token: string) => {
    const newPayload = getPrice(fetchedTokenData, token) as any;
    dispatch(
      updateToken({
        payload: { name: newPayload.tokenName, price: newPayload.tokenPrice },
      })
    );
  };
  //////////////////TEST////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    dispatch(getTokenInfo());
    getPriceHandler("bitcoin");
  }, [dispatch]);

  const fetchedTokenData = useAppSelector(
    (state) => state.fetchToken.tokenData
  );

  const [calcType, setCalcType] = useState("staking");

  const fetchBitcoinHandler = () => {
    getPriceHandler("bitcoin");
  };

  const fetchEthereumHandler = () => {
    getPriceHandler("ethereum");
  };
  const fetchSolanaHandler = () => {
    getPriceHandler("solana");
  };
  const fetchCardanoHandler = () => {
    getPriceHandler("cardano");
  };
  const fetchUsdcHandler = () => {
    getPriceHandler("usd-coin");
  };

  let inactiveCalcType;
  if (calcType === "staking") {
    inactiveCalcType = "Borrow";
  } else {
    inactiveCalcType = "Staking";
  }
  const calcButtonToggle = () => {
    calcType === "staking" ? setCalcType("borrow") : setCalcType("staking");
  };

  const cryptoSelector = (
    <div className="crypto-icons">
      <img
        onClick={fetchBitcoinHandler}
        src={bitcoin}
        alt="bitcon token"
        className="crypto-icons-active"
      />
      <img onClick={fetchEthereumHandler} src={eth} alt="eth token" />
      <img onClick={fetchSolanaHandler} src={solana} alt="solana token" />
      <img onClick={fetchCardanoHandler} src={cardano} alt="cardano token" />
      <img onClick={fetchUsdcHandler} src={usdc} alt="cardano token" />
    </div>
  );

  const stakeCalc = (
    <div className="calc-form">
      <h3>Select Your Crypto</h3>
      <h4>{`${tokenName} Price: $${tokenPrice.toFixed(2)}`}</h4>
      {cryptoSelector}
      <form action="">
        <label htmlFor="">
          <h3>Quantity Staked</h3>
        </label>
        <input type="number" placeholder="0.00" />
      </form>
      <div>
        <h3>Months</h3>
        <div className="calc-form__month-selector">
          <div className="calc-form__month-selector-item">1 Month</div>
          <div className="calc-form__month-selector-item">6 Months</div>
          <div className="calc-form__month-selector-item active">12 Months</div>
        </div>
      </div>
    </div>
  );

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
              <div onClick={fetchEthereumHandler}>
                <Button className="calc-left-heading-inactive btn-pink">
                  Check {inactiveCalcType} Rates
                </Button>
              </div>
            </div>
            {calcType === "staking" && stakeCalc}
            {calcType === "borrow" && borrowCalc}
          </div>
          <div className="calc-right">
            <div className="total-yield-box">
              <h3>Total Yield</h3>
              <div className="total-yield-box__value">$1,200.00</div>
              <div className="total-yield-box__gain">3.00% Gain</div>
            </div>
            <div className="yield-box">
              <div className="yield-box-inner">
                <div>Monthly Yield</div>
                <div className="yield-box__value">$100.00</div>
                <div>0.05% APR</div>
              </div>
              <div className="yield-box-inner">
                <div>Annual Yield</div>
                <div className="yield-box__value">$1200.00</div>
                <div>3.00% APY</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default Calculator;
