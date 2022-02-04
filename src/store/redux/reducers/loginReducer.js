import { loginTypes } from "../types";

const loginReducerState = {
  user: {
    uid: null,
    nameUser: null,
    emailUser: null,
    photoUser: null,
  },
  error: null,
};

export const loginReducer = (state = loginReducerState, action) => {
  switch (action.type) {
    case loginTypes.LOGIN:
      return {
        ...state,
        user: action.user,
      };
    case loginTypes.LOGOUT:
      return {
        ...state,
        user: {
          uid: null,
          nameUser: null,
          emailUser: null,
          photoUser: null,
        },
        error: null,
      };
    case loginTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
