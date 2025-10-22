import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { authStoreType } from '../../types/store-type/authStore';
import { Profile } from '../../types/user-type';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state: authStoreType) => {
      state.isLoggedIn = true;
    },
    logOutUser: state => {
      state.isLoggedIn = false;
    },
    addProfileDetails: (
      state: authStoreType,
      { payload }: PayloadAction<Profile>,
    ) => {
      state.profileDetails = payload;
    },
    resetAuthState: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logOutUser, addProfileDetails, resetAuthState } =
  AuthSlice.actions;

// export reducer function
export default AuthSlice.reducer;

export type AuthStateT = typeof AuthSlice;
