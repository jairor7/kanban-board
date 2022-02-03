import { loginTypes } from "../types";

const loginReducerState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = loginReducerState, action) => {
  switch (action.type) {
    case loginTypes.LOGIN:
      return {
        ...state,
        uid: action.uid,
      };
    case loginTypes.LOGOUT:
      return {
        ...state,
        uid: null,
      };
    default:
      return state;
  }
};
