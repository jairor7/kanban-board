import { loadingTypes } from "../types";

const generalReducerState = {
  isLoading: false,
};

export const generalReducer = (state = generalReducerState, action) => {
  switch (action.type) {
    case loadingTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
