import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  test('returns true if word is "racecar"', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test('returns false if word is "car"', () => {
    expect(isPalindrome("car")).toBe(false);
  });
});
