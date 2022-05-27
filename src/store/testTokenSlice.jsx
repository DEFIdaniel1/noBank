import { createSlice } from "@reduxjs/toolkit";
// import { TokenState, TokenPayload } from "../models/propTypes";

const testSlice = createSlice({
  name: "TokenSlice",
  initialState: {
    name: "BizzCoinZZZZZ",
    price: 123123,
  },
  reducers: {
    updateToken(state, action) {
      {
        state.name = action.payload.payload.name;
        state.price = action.payload.payload.price;
        console.log(action.payload);
      }
    },
  },
});

export const { findToken, updateToken } = testSlice.actions;

export default testSlice.reducer;
