import React from "react";
import { shallow } from "enzyme";
import { Notification } from "./Notifications";

describe("Navigation component tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notification />);
  });

  test("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("renders three list items", () => {
    expect(wrapper.find("li").length).toBe(3);
  });

  test("renders the expected text", () => {
    expect(wrapper.text().includes("Here is the list of notifications")).toBe(
      true
    );
  });
});
