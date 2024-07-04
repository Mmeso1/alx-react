import React from "react";
import { shallow } from "enzyme";
import { Notification } from "./Notifications";
import NotificationItem from "./Notifications/NotificationItem";

describe("Navigation component tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notification />);
  });

  test("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("renders three list items", () => {
    expect(wrapper.find(NotificationItem).length).toBeGreaterThan(30);
  });

  test("renders the expected text", () => {
    expect(wrapper.text().includes("Here is the list of notifications")).toBe(
      true
    );
  });
});
