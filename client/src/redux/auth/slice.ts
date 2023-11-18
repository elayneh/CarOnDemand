// slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUserRequest: (state, action: PayloadAction<User>) => {
      state.loading = true;
      state.user = action.payload;
      state.error = null;
    },
    registerUserSuccess: (state) => {
      state.loading = false;
    },
    registerUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registerUserRequest, registerUserSuccess, registerUserFailure } =
  authSlice.actions;
export default authSlice.reducer;
