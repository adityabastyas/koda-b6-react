import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const auth = {
  key: "users",
  storage,
};

const reducer = combineReducers({
  auth: persistReducer(auth, authReducer),
});

export default reducer;
