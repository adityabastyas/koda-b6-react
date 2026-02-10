import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLogin: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      state.isLogin = true;
      state.currentUser = action.payload;
    },
    logoutUser: (state) => {
      state.isLogin = false;
      state.currentUser = null;
    },

    updateProfile: (state,action) => {
      state.currentUser = {
        ...state.currentUser,
        ...action.payload
      };
    }
    
  },
});

export const { registerUser, loginUser, logoutUser, updateProfile } = authSlice.actions;
export default authSlice.reducer;
