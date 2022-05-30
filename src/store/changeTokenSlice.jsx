import { createSlice } from "@reduxjs/toolkit";
// import { TokenState, TokenPayload } from "../models/propTypes";

const changeToken = createSlice({
  name: "TokenSlice",
  initialState: {
    name: "test...",
    price: 0,
  },
  reducers: {
    updateToken(state, action) {
      {
        state.name = action.payload.payloadData.name;
        state.price = action.payload.payloadData.price;
      }
    },
  },
});

export const { findToken, updateToken } = changeToken.actions;

export default changeToken.reducer;
