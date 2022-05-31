import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTokenInfo = createAsyncThunk(
  "tokens/getTokenInfo",
  async () => {
    const apiData = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
    );
    return apiData.json();
  }
);

// type TokenData = {
//   tokenData: object;
//   loading: boolean;
// }

const fetchDataSlice = createSlice({
  name: "fetchData",
  initialState: {
    tokenData: [{ name: "loading...", price: 0 }],
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
