import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import {
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
  registerUserFailure,
  registerUserRequest,
  registerUserSuccess,
  userProfileFailure,
  userProfileRequest,
} from "./userSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
require("dotenv").config();

const PORT = process.env.PORT ?? null;
const BASE_URL = process.env.BASE_URL ?? "";

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
const registerUserRequestAPI = async (user: User) => {
  return axios.post(`${BASE_URL}:${PORT}/user/register`, user);
};
function loginUserRequestAPI(loginCredential: LoginCredential) {
  return axios.post(`${BASE_URL}:${PORT}/user/login`, loginCredential);
}

const userProfileRequestAPI = async () => {
  return axios.post(`${BASE_URL}:${PORT}/user/profile`);
};

// End of API Call

function* registerUser(
  action: PayloadAction<User>
): Generator<any, void, unknown> {
  try {
    const response: any = yield call(registerUserRequestAPI, action.payload);
    localStorage.setItem("carondemandToken", response.data.userData.token);
    yield put(registerUserSuccess(response.data.userData));
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
    localStorage.setItem("carondemandToken", response.data.userData.token);
    yield put(loginUserSuccess(response.data.userData));
  } catch (err: any) {
    toast.error(err.response.data.message);
    yield put(loginUserFailure(err.response.data.message));
  }
}

// Profile
function* userProfile(): Generator<any, void, unknown> {
  try {
    const response: any = yield call(userProfileRequestAPI);
    localStorage.setItem("userInformation", response.data.UserCredential);
  } catch (err) {
    toast.error(err.response.data.message);
    yield put(userProfileFailure(err.respomse.data.message));
  }
}

function* registerWatcherSaga() {
  yield takeLatest(registerUserRequest.type, registerUser);
}
function* loginWatcherSaga() {
  yield takeLatest(loginUserRequest, loginUser);
}
function* profileWatcherSaga() {
  yield takeLatest(userProfileRequest, userProfile);
}

export default function* rootSaga() {
  yield all([loginWatcherSaga(), registerWatcherSaga(), profileWatcherSaga]);
}
