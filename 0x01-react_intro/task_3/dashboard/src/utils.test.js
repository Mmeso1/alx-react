import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("getFullYear function", () => {
  it("returns the current year", () => {
    const year = getFullYear();
    expect(year).toEqual(new Date().getFullYear()); // Avoids creating a time bomb by always comparing to the current year
  });
});

describe("getFooterCopy function", () => {
  it("returns the expected string if arg value is true", () => {
    const trueFooterCopy = getFooterCopy(true);
    expect(trueFooterCopy).toEqual("Holberton School");
  });

  it("returns the expected string if arg value is false", () => {
    const falseFooterCopy = getFooterCopy(false);
    expect(falseFooterCopy).toEqual(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});

describe("getLatestNotification function", () => {
  it("returns the expected string", () => {
    const notification = getLatestNotification();
    expect(notification).toEqual(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});
