import Footer from "./Footer";

describe("Footer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  test("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("renders a p tag", () => {
    expect(wrapper.text().includes("Copyright")).toBe(true);
  });
});
