export type CalcRmInput = {
  rep: number;
  weight: number;
};

export type CalcRmOutput = {
  rm: number;
};

// use O'Conner's formula to calculate 1 rep max
export function calcRm(input: CalcRmInput): CalcRmOutput {
  return {
    rm: Math.round(((input.weight * input.rep) / 40 + input.weight) * 10) / 10,
  };
}
