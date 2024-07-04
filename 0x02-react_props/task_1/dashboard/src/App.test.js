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

  test("renders a div with the class App-header", () => {
    expect(wrapper.find(".App-header").exists()).toBe(true);
  });

  test("renders a div with the class App-body", () => {
    expect(wrapper.find(".App-body").exists()).toBe(true);
  });

  test("renders a div with the class App-footer", () => {
    expect(wrapper.find(".App-footer").exists()).toBe(true);
  });

  // New checks
  test("contains the Notifications component", () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  test("contains the Header component", () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  test("contains the Login component", () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  test("contains the Footer component", () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});
