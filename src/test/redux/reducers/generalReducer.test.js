import { generalReducer } from "../../../store/redux/reducers/generalReducer";
import { loadingTypes } from "../../../store/redux/types";

const stateDefault = {
  isLoading: false,
};

test("should set default state", () => {
  const stateCurrent = generalReducer(undefined, { type: "@@INIT" });
  expect(stateCurrent).toEqual(stateDefault);
});

test("should set loading value", () => {
  const action = {
    type: loadingTypes.SET_LOADING,
    isLoading: true,
  };
  const state = generalReducer(stateDefault, action);
  expect(state).toEqual({ isLoading: true });
});
