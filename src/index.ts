import { OptionValues, program } from "commander";

type RunInput = {
  dryRun: boolean;
};

function run(input: RunInput) {
  console.log("Hello World!");
  console.log("Input: ", input);
}

function optionsToRunInput(option: OptionValues): RunInput {
  return {
    dryRun: option.dryRun,
  };
}

program.option("-d, --dry-run", "dry run");
program.parse();
run(optionsToRunInput(program.opts()));
