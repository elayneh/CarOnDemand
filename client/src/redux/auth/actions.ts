import { createAction } from "@reduxjs/toolkit";

// Create an action creator for registering a user
const registerUserRequest = createAction("user/registerUserRequest");
const registerUserSuccess = createAction("user/registerUserSuccess");
const registerUserFailure = createAction("user/registerUserFailure");

// You can also use createAction to create actions with payloads
const setUserName = createAction<string>("user/setUserName");

// Example of using createAction with a payload and meta properties
const fetchData = createAction<any, string>(
  "data/fetchData",
  (id: any, token: any) => ({
    payload: id,
    meta: { token },
  })
);

export {
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  setUserName,
  fetchData,
};
