#!/usr/bin/env node

const { Command } = require('commander');
const child_process = require('child_process');
const program = new Command();

program.name('git-change-name').description('auto git mv').version('1.0.0');

program
  .command('gcn')
  .argument('<oldName>', 'oldName')
  .argument('<newName>', 'newName')
  .action((oldName, newName) => {
    console.log('oldName :>> ', oldName);
    console.log('newName :>> ', newName);
    const command = `git mv ${oldName} 1.md && git mv 1.md ${newName}`;
    child_process.exec(command, (error) => {
      if (error) {
        throw new Error(error);
      }
      console.log('执行成功');
    });
  });

program.parse();
