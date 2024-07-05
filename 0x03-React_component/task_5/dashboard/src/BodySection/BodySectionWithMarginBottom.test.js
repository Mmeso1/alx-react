// BodySectionWithMarginBottom.test.js
import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("<BodySectionWithMarginBottom />", () => {
  it("renders correctly a BodySection component and passes props correctly", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.exists()).toBe(true);
    expect(bodySection.prop("title")).toBe("test title");
    expect(bodySection.dive().find("p").text()).toBe("test children node");
    // Check for CSS application if applicable
    // This part depends on how CSS is applied, e.g., via styled-components or className
    // Example for className:
    // expect(wrapper.find('.BodySectionWithMargin').exists()).toBe(true);
  });
});
