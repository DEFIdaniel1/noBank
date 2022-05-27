import { configureStore } from "@reduxjs/toolkit";
import fetchDataSlice from "./fetchDataSlice";
// import changeTokenSlice from "./changeTokenSlice";
import testTokenSlice from "./testTokenSlice";

const store = configureStore({
  reducer: {
    changeToken: testTokenSlice,
    fetchToken: fetchDataSlice,
  },
});
export default store;

//from react-redux documentation for typescript
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
