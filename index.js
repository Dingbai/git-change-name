#!/usr/bin/env node
const { Command } = require('commander');
const child_process = require('child_process');
const { version } = require('./package.json');
const program = new Command();

program.name('gcn').usage('<oldName> <newName>').description('git file rename');

program
  .command('gcn <oldName> <newName>')
  .description('rename oldname to newName')
  .action((oldName, newName) => {
    const command = `git mv ${oldName} 1.md && git mv 1.md ${newName}`;
    child_process.exec(command, (error) => {
      if (error) {
        throw new Error(error);
      }
      console.log('执行成功');
    });
  });

program.version(version, '-v, --VERSION', 'new version message');

program.parse();
