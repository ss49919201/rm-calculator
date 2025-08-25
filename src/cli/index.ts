import { type OptionValues, program } from "commander";
import { calcRm } from "../workflow/calcRm";

type RunInput = {
  dryRun: boolean;
  rep: number;
  weight: number;
};

function run(input: RunInput) {
  const out = calcRm({
    rep: input.rep,
    weight: input.weight,
  });

  console.log(`1RM: ${out.rm}`);
}

function optionsToRunInput(option: OptionValues): RunInput {
  return {
    dryRun: option.dryRun,
    rep: option.rep,
    weight: option.weight,
  };
}

function parseFloatOrThrow(value: string) {
  const f = parseFloat(value);
  if (Number.isNaN(f)) {
    throw new Error("Invalid number");
  }
  return f;
}

program
  .requiredOption("-r, --rep <rep>", "rep", parseFloatOrThrow)
  .requiredOption("-w, --weight <weight>", "weight", parseFloatOrThrow)
  .option("-d, --dry-run", "dry run")
  .parse();

run(optionsToRunInput(program.opts()));
