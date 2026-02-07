import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reduces";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer,
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: false,
    }),
});

export const persistore = persistStore(store);
