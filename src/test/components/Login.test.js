import Login from "../../components/account/Login";
import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

test("should render Login correctly", () => {
  const wrapper = shallow(<Login />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
