import Header from "./Header";

describe("Header component tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  test("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("renders an img tag", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });

  test("renders an h1 tag", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});
