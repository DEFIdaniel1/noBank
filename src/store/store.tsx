import { configureStore } from "@reduxjs/toolkit";
import ApiRequest from "../components/API/ApiRequest";
import findPrice from "../components/helper/findPrice";
import { TokenState } from "../models/propTypes";
import { TokenAction } from "../models/action-types";

const tokenData = ApiRequest();
const initialState: TokenState = {
  tokenPrice: 1,
  tokenName: "bitcoin",
};

//need to update action type once finalized
const tokenReducer = (state: TokenState = initialState, action: any) => {
  switch (action.type) {
    case action.type === TokenAction.FetchBTC:
      return {
        tokenPrice: findPrice(tokenData, "bitcoin"),
        tokenName: "Bitcoin",
      };
    case action.type === TokenAction.FetchETH:
      return {
        tokenPrice: findPrice(tokenData, "ethereum"),
        tokenName: "Ethereum",
      };
    case action.type === TokenAction.FetchSOL:
      return {
        tokenPrice: findPrice(tokenData, "solana"),
        tokenName: "Solana",
      };
    case action.type === TokenAction.FetchADA:
      return {
        tokenPrice: findPrice(tokenData, "Cardano"),
        tokenName: "Cardano",
      };
    case action.type === TokenAction.FetchUSDC:
      return {
        tokenPrice: 1.0,
        tokenName: "USDC",
      };
    default:
      return initialState;
  }
};

const store = configureStore({ reducer: tokenReducer });

export default store;

//from react-redux documentation for typescript
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch