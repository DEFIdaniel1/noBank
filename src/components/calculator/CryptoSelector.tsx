import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getTokenInfo } from "../../store/fetchDataSlice";
import { updateToken } from "../../store/changeTokenSlice";
import { changeYieldPercentage } from "../../store/calculatorSlice";

import bitcoin from "../../images/icons/bitcoin.png";
import eth from "../../images/icons/eth.svg";
import solana from "../../images/icons/solana.png";
import cardano from "../../images/icons/cardano.png";
import usdc from "../../images/icons/usdc.png";

const CryptoSelector = () => {
  const dispatch = useAppDispatch();
  const activeToken = useAppSelector((state) => state.changeToken.name);

  const fetchedTokenData = useAppSelector(
    (state) => state.fetchToken.tokenData
  );
  const loadingState = useAppSelector((state) => state.fetchToken.loading);

  const getPrice = (data: any, name: string) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === name) {
        const tokenPrice: number = data[i]["current_price"];
        const tokenName: string = data[i]["name"];
        console.log(tokenPrice);
        dispatch(
          updateToken({
            payloadData: { name: tokenName, price: tokenPrice },
          })
        );
        console.log(tokenName);
        return { tokenName, tokenPrice };
      }
    }
  };
  const getPriceHandler = (token: string) => {
    getPrice(fetchedTokenData, token);
  };
  useEffect(() => {
    dispatch(getTokenInfo());
    getPriceHandler("bitcoin");
    dispatch(changeYieldPercentage(4.5));
  }, [loadingState]);

  const fetchBitcoinHandler = () => {
    getPriceHandler("bitcoin");
    dispatch(changeYieldPercentage(4.5));
  };

  const fetchEthereumHandler = () => {
    getPriceHandler("ethereum");
    dispatch(changeYieldPercentage(5.6));
  };
  const fetchSolanaHandler = () => {
    getPriceHandler("solana");
    dispatch(changeYieldPercentage(7.8));
  };
  const fetchCardanoHandler = () => {
    getPriceHandler("cardano");
    dispatch(changeYieldPercentage(8.2));
  };
  const fetchUsdcHandler = () => {
    getPriceHandler("usd-coin");
    dispatch(changeYieldPercentage(19));
  };

  const cryptoIconClass = "crypto-icons";

  return (
    <div className="crypto-icons">
      <img
        onClick={fetchBitcoinHandler}
        src={bitcoin}
        alt="bitcon token"
        className={
          activeToken === "Bitcoin"
            ? `${cryptoIconClass}-active`
            : cryptoIconClass
        }
      />
      <img
        onClick={fetchEthereumHandler}
        src={eth}
        alt="eth token"
        className={
          activeToken === "Ethereum"
            ? `${cryptoIconClass}-active`
            : cryptoIconClass
        }
      />
      <img
        onClick={fetchSolanaHandler}
        src={solana}
        alt="solana token"
        className={
          activeToken === "Solana"
            ? `${cryptoIconClass}-active`
            : cryptoIconClass
        }
      />
      <img
        onClick={fetchCardanoHandler}
        src={cardano}
        alt="cardano token"
        className={
          activeToken === "Cardano"
            ? `${cryptoIconClass}-active`
            : cryptoIconClass
        }
      />
      <img
        onClick={fetchUsdcHandler}
        src={usdc}
        alt="usd coin token"
        className={
          activeToken === "USD Coin"
            ? `${cryptoIconClass}-active`
            : cryptoIconClass
        }
      />
    </div>
  );
};

export default CryptoSelector;
