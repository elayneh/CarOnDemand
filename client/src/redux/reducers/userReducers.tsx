import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../../constant/actionTypes";

interface UserState {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
}
const initialUserState: UserState = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
};

const userReducer = (state = initialUserState, action: any) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
    case USER_LOGIN_REQUEST:
      return { ...state, error: null };
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case USER_REGISTER_FAILURE:
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        email: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
