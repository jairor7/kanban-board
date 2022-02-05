import Loading from "../../../components/general/Loading";
import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

test("should render Loading correctly", () => {
  const wrapper = shallow(<Loading />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
