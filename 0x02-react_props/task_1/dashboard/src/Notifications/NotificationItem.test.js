import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("<NotificationItem />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correct value with type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.text()).toBe("test");
    expect(wrapper.prop("type")).toBe("default");
  });

  it("renders correct html with html prop", () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(wrapper.html()).toContain("<u>test</u>");
  });
});
