const chalk = require('chalk');

module.exports = {
  error: chalk.bold.red,
  info: chalk.blue,
  warning: chalk.keyword('orange'),
  success: chalk.green,
}
