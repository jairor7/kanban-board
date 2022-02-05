import { loginReducer } from "../../../store/redux/reducers/loginReducer";
import { loginTypes } from "../../../store/redux/types";
import { user, userDefault } from "../../fixtures/user";

test("should set default state", () => {
  const stateCurrent = loginReducer(undefined, { type: "@@INIT" });
  expect(stateCurrent).toEqual(userDefault);
});

test("should add information of the user", () => {
  const action = {
    type: loginTypes.LOGIN,
    user: user.user,
  };
  const state = loginReducer(userDefault, action);
  expect(state).toEqual(user);
});

test("should put default information the user", () => {
  const action = {
    type: loginTypes.LOGOUT,
  };
  const state = loginReducer(user, action);
  expect(state).toEqual(userDefault);
});

test("should change error message of the login", () => {
  let errorMessage = "Failed to login";
  const action = {
    type: loginTypes.LOGIN_ERROR,
    error: errorMessage,
  };
  const state = loginReducer(userDefault, action);
  expect(state.error).toBe(errorMessage);
});
