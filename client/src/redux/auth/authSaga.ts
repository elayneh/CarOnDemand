import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import {
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
  registerUserFailure,
  registerUserRequest,
  registerUserSuccess,
  userLogoutRequest,
  userLogoutSuccess,
} from "./userSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
interface LoginCredential {
  email: string;
  password: string;
}

// API calls start from here
function registerUserRequestAPI(user: User) {
  return axios.post("http://localhost:5000/user/register", user);
}
function loginUserRequestAPI(loginCredential: LoginCredential) {
  return axios.post("http://localhost:5000/user/login", loginCredential);
}
// End of API Call

function* registerUser(
  action: PayloadAction<User>
): Generator<any, void, unknown> {
  try {
    const response: any = yield call(registerUserRequestAPI, action.payload);
    yield put(registerUserSuccess(response.data.userData));
    window.location.assign("/user/dashboard");
  } catch (err: any) {
    toast.error(err.response.data.message);
    yield put(registerUserFailure(err.response.data.message));
  }
}

function* loginUser(
  action: PayloadAction<LoginCredential>
): Generator<any, void, unknown> {
  try {
    const response: any = yield call(loginUserRequestAPI, action.payload);
    // window.location.assign("/user/dashboard");
    yield put(loginUserSuccess(response.data.loginCredential));
  } catch (err: any) {
    toast.error(err.response.data.message);
    yield put(loginUserFailure(err.response.data.message));
  }
}

function* logoutUser(): Generator<any, void, unknown> {
  try {
    yield call(userLogoutRequest);
    // console.log("DOCUMENT.COOKIE", document.cookie);
    // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // const navigate = useNavigate();
    // navigate("/");
    yield put(userLogoutSuccess);
  } catch (err: any) {
    toast.error(err.response.data.message);
    yield put(loginUserFailure(err.response.data.message));
  }
}

function* registerWatcherSaga() {
  yield takeLatest(registerUserRequest.type, registerUser);
}
function* loginWatcherSaga() {
  yield takeLatest(loginUserRequest, loginUser);
}

function* logoutWatcherSaga() {
  yield takeLatest(userLogoutRequest, logoutUser);
}

export default function* rootSaga() {
  yield all([loginWatcherSaga(), registerWatcherSaga(), logoutWatcherSaga()]);
}
