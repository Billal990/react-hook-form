import { configureStore } from "@reduxjs/toolkit";
import createUserSlice from "./createUserSlice";

export default configureStore({
  reducer: {
    createUser: createUserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
