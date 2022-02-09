import { loginTypes } from "../types";

const loginReducerState = {
  user: {
    uid: null,
    nameUser: null,
    emailUser: null,
    photoUser: null,
  },
  error: null,
  isLogin: true,
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
    case loginTypes.SET_IS_LOADING:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    default:
      return state;
  }
};
