import { configureStore } from "@reduxjs/toolkit";
import fetchDataSlice from "./fetchDataSlice";
import changeTokenSlice from "./changeTokenSlice";
import calculatorSlice from "./calculatorSlice";

const store = configureStore({
  reducer: {
    changeToken: changeTokenSlice,
    fetchToken: fetchDataSlice,
    calculator: calculatorSlice,
  },
});
export default store;

//from react-redux documentation for typescript
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
