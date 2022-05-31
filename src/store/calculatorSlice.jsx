import { createSlice } from "@reduxjs/toolkit";
// import { TokenState, TokenPayload } from "../models/propTypes";

const calculatorSlice = createSlice({
  name: "calculatorSlice",
  initialState: {
    quantityStaked: "",
    yieldPercentage: 0,
    months: 12,
  },
  reducers: {
    changeQuantityStaked(state, action) {
      return {
        ...state,
        quantityStaked: action.payload,
      };
    },
    changeYieldPercentage(state, action) {
      return {
        ...state,
        yieldPercentage: action.payload,
      };
    },
    changeMonths(state, action) {
      return {
        ...state,
        months: action.payload,
      };
    },
  },
});

export const { changeQuantityStaked, changeYieldPercentage, changeMonths } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
