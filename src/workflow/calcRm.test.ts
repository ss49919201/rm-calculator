import { calcRm } from "./calcRm";

describe("calcRm", () => {
  it("simple_values calclated_value", () => {
    // Arrange
    const input = {
      rep: 10,
      weight: 70,
    };

    // Act
    const output = calcRm(input);

    // Assert
    expect(output.rm).toBe(87.5);
  });
});
