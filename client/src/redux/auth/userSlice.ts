import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string | null;
}

interface LoginCredential {
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
    registerUserSuccess: (state, action: PayloadAction<User>) => {
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
    loginUserSuccess: (state, action: PayloadAction<LoginCredential>) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.loginCredential = action.payload;
    },
    loginUserFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    userLogoutRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    userLogoutSuccess: (state) => {
      state.loading = true;
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
  userLogoutFailure,
  userLogoutRequest,
  userLogoutSuccess,
} = userSlice.actions;

export default userSlice.reducer;
