import { call, put, takeEvery } from "redux-saga/effects";
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
} from "./slice";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { FetchResult } from "apollo-boost";

interface registerUser {
  registerUser: any;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function* registerUser(action: ReturnType<typeof registerUserRequest>) {
  try {
    const { firstName, lastName, email, password } = action.payload;
    const REGISTER_USER = gql`
      mutation registerUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
      ) {
        registerUser(username: $username, email: $email, password: $password) {
          fistName
          lastName
          email
          password
        }
      }
    `;

    const result: FetchResult<registerUser> = yield call(client.mutate, {
      mutation: REGISTER_USER,
      variables: { firstName, lastName, email, password },
    });
    yield put(registerUserSuccess(result.data!.registerUser));
  } catch (err: any) {
    yield put(registerUserFailure(err.message));
  }
}

function* userSaga() {
  yield takeEvery(registerUserRequest, registerUser);
}

export default userSaga;
