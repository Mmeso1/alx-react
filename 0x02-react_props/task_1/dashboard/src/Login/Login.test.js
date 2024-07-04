import Login from "./Login";

describe("Login component tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  test("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("renders two input tags", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });

  test("renders two label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });
});
