const { info } = require('../chalk');
const commands = require('../commands');

const showCommands = () => {
  return console.log(info(`Available commands are:\n${commands.join(', ')}`));
}

module.exports = showCommands;
