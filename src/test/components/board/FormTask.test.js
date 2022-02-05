import { FormTask } from "../../../components/board/FormTask";
import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

test("should render FormTask correctly", () => {
  const wrapper = shallow(<FormTask />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
