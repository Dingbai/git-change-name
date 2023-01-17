#!/usr/bin/env node
const { Command } = require('commander');
const child_process = require('child_process');
const { version } = require('./package.json');
const program = new Command();

program.name('mv').usage('<oldName> <newName>').description('git file rename');

program
  .command('mv')
  .description('rename oldname to newName')
  .action(function () {
    const [oldName, newName] = this.args;
    if (!oldName || !newName) {
      throw new Error('oldName/newName 不能为空！请检查参数');
    }
    const command = `git mv ${oldName} 1.md && git mv 1.md ${newName}`;
    child_process.exec(command, (error) => {
      if (error) {
        throw new Error(error);
      }
      console.log('执行成功');
    });
  });

program.version(version, '-v, --VERSION', 'new version message');

program.parse(process.argv);
