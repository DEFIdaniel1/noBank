import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTokenInfo = createAsyncThunk(
  "tokens/getTokenInfo",
  async () => {
    console.log("running");
    return fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
    ).then((res) => res.json());
  }
);

// type TokenData = {
//   tokenData: object;
//   loading: boolean;
// }

const fetchDataSlice = createSlice({
  name: "fetchData",
  initialState: {
    tokenData: [{ id: "" }],
    loading: true,
  },
  extraReducers: {
    [getTokenInfo.fulfilled]: (state, action) => {
      state.tokenData = action.payload;
      state.loading = false;
    },
    [getTokenInfo.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default fetchDataSlice.reducer;
