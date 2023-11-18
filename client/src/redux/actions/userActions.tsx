import * as action from "./../../constant/actionTypes";

interface User {
  username: string;
  email: string;
  password: string;
}

export const registerRequest = (user: User) => ({
  type: action.USER_REGISTER_REQUEST,
  payload: user,
});
export const registerSuccess = () => ({
  type: action.USER_LOGIN_SUCCESS,
});
export const registerFailure = (error: string) => ({
  type: action.USER_REGISTER_FAILURE,
  payload: error,
});

export const loginReguest = (user: User) => ({
  type: action.USER_LOGIN_REQUEST,
  payload: user,
});
export const loginSuccess = () => ({
  type: action.USER_LOGIN_SUCCESS,
});

export const loginFaulure = (error: string) => ({
  type: action.USER_LOGIN_FAILURE,
  payload: error,
});
export const loginout = () => ({
  type: action.USER_LOGOUT,
});
