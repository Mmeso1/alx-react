import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
