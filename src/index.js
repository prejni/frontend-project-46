import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

program.parse();

// const options = program.opts();

export default function main() {
  console.log('Welcome to the Brain Games!');
}
