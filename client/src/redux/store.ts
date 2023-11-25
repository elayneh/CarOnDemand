// store.ts
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./auth/authSaga";
import userAuthenticationReduce from './auth/userSlice'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    userAuthentication: userAuthenticationReduce,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
