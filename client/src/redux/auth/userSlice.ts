import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginCredential {
  email: string;
  password: string;
}
interface UserCredential {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string | null;
}
interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  loginCredential: LoginCredential | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  isLoggedIn: false,
  loginCredential: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUserRequest: (state, action: PayloadAction<User>) => {
      state.loading = true;
      state.error = null;
    },
    registerUserSuccess: (state, action: PayloadAction<UserCredential>) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    registerUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    loginUserRequest: (state, action: PayloadAction<LoginCredential>) => {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess: (state, action: PayloadAction<UserCredential>) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginUserFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    // User profile
    userProfileRequest: (state) => {
      state.error = null;
      state.loading = true;
    },
    userProfileSuccess: (state, action: PayloadAction<UserCredential>) => {
      state.user = action.payload;
      state.loading = false;
    },
    userProfileFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    // User logout
    userLogoutRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    userLogoutSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.isLoggedIn = false;
      state.loginCredential = null;
      state.user = null;
    },
    userLogoutFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  registerUserRequest,
  registerUserFailure,
  registerUserSuccess,
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
  userProfileFailure,
  userProfileRequest,
  userProfileSuccess,
  userLogoutFailure,
  userLogoutRequest,
  userLogoutSuccess,
} = userSlice.actions;

export default userSlice.reducer;
