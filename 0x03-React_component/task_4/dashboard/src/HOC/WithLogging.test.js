import React from "react";
import { mount } from "enzyme";
import WithLogging from "./WithLogging";

describe("WithLogging HOC", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("should log on mount and unmount with Component when the wrapped element is pure html", () => {
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = mount(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith("Component Component is mounted");
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component Component is going to unmount"
    );
  });

  it("should log on mount and unmount with the name of the component when the wrapped element is the Login component", () => {
    const Login = () => <div />;
    Login.displayName = "Login";
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith("Component Login is mounted");
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component Login is going to unmount"
    );
  });
});
