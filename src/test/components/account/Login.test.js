import { Login } from "../../../components/account/Login";
import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";

let login, wrapper, history;

beforeEach(() => {
  login = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <BrowserRouter>
      <Login login={login} />
    </BrowserRouter>
  );
});

test("should render Login correctly", () => {
  const wrapper = shallow(<Login />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle startLogin the login", () => {
  wrapper.find("Login").prop("login")(history);
  expect(login).toHaveBeenLastCalledWith(history);
});
