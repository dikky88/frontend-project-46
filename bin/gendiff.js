#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../src/index.js';

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((file1, file2) => {
    console.log(gendiff(file1, file2));
  });

program.parse();
