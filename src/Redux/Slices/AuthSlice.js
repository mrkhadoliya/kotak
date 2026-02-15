import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  authToken: null,
  AccountActivityData:[],
  balance:null,
  FromLoginScreen:""
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutSuccess:(state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.authToken = null;
      state.balance = null;
      state.AccountActivityData=[]
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setAccountActivityData: (state, action) => {
      state.AccountActivityData = action.payload;
    },
    setLoginTime: (state, action) => {
      state.FromLoginScreen = action.payload;
    },
  },
});

export const {
    loginSuccess,
    logoutSuccess,
    setAccountActivityData,
    setBalance,
    setLoginTime
} = authSlice.actions;

export default authSlice.reducer;
