import { zeroPrioritiesCalc, firstPrioritiesCalc, secondPrioritiesCalc, thirdPrioritiesCalc } from "./engine";

describe("zeroPrioritiesCalc simple cases", () => {
  it("[2, **]", () => {
    expect(zeroPrioritiesCalc([2, "**"])).toEqual([4]);
  });

  it("[4, **]", () => {
    expect(zeroPrioritiesCalc([4, "**"])).toEqual([16]);
  });
});

describe("firstPrioritiesCalc simple cases", () => {
  it("[2, ^ , 2]", () => {
    expect(firstPrioritiesCalc([2, "^", 2])).toEqual([4]);
  });

  it("[4, ^, 4]", () => {
    expect(firstPrioritiesCalc([4, "^", 4])).toEqual([256]);
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[1, * 32]", () => {
    expect(secondPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(secondPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, + 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });
});

describe("secondPrioritiesCalc mixed with third priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(secondPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });
});

// describe("thirdPrioritiesCalc invalid cases", () => {
//   it("[32, / 32]", () => {
//     expect(() => thirdPrioritiesCalc([32, "/", 32])).toThrow(
//       TypeError("Unexpected stack!")
//     );
//   });
// });

describe("thirdPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(thirdPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, - 32]", () => {
    expect(thirdPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, - 32, +, 10]", () => {
    expect(thirdPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });

  it("[32, - 32, +, 10]", () => {
    expect(thirdPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
