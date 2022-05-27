import { TokenState } from "../models/propTypes";
import { TokenAction } from "../models/action-types";
import useFindPrice from "../components/helper/useFindPrice";

const initialState = {
  tokenPrice: 2,
  tokenName: "Bitcoin",
};

//need to update action type once finalized
const changeTokenSlice = (state = initialState, action) => {
  // const fetchedTokenData = useAppSelector(
  //   (state) => state.fetchToken.tokenData
  // );
  // const findPrice = (name: string) => {
  //   const data: any = fetchedTokenData;
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].id === name) {
  //       const price = data[i]["current_price"];
  //       console.log(price);
  //       return price;
  //     }
  //   }
  // };

  switch (action.type) {
    case action.type === TokenAction.FetchBTC:
      return {
        ...state,
        tokenPrice: useFindPrice("bitcoin"),
        tokenName: "Bitcoin",
      };
    case action.type === TokenAction.FetchETH:
      return {
        ...state,
        tokenPrice: useFindPrice("ethereum"),
        tokenName: "Ethereum",
      };
    case action.type === TokenAction.FetchSOL:
      return {
        ...state,
        tokenPrice: useFindPrice("solana"),
        tokenName: "Solana",
      };
    case action.type === TokenAction.FetchADA:
      return {
        ...state,
        tokenPrice: useFindPrice("Cardano"),
        tokenName: "Cardano",
      };
    case action.type === TokenAction.FetchUSDC:
      return {
        ...state,
        tokenPrice: 1.0,
        tokenName: "USDC",
      };
    default:
      return initialState;
  }
};

export default changeTokenSlice;
