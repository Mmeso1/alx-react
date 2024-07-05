import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("rendering components", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders NotificationItem component without crashing", () => {
    const wrapper = shallow(<NotificationItem />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toEqual(
      '<li data-notification-type="default">test</li>'
    );
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ html: "<u>test</u>" });
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });

  it("calls the spy with the right ID when simulating a click", () => {
    const markAsReadSpy = jest.fn();
    const id = 123;
    const wrapper = shallow(
      <NotificationItem id={id} markAsRead={markAsReadSpy} />
    );

    wrapper.find("li").simulate("click");
    expect(markAsReadSpy).toHaveBeenCalledWith(id);
  });
});
