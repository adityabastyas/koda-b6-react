import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reduces";

const store = configureStore({
  reducer,
});
