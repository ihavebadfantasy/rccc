const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const commands = require('./commands');
const { error, info } = require('./chalk');
const config = require('./config');
const initialConfig = require('./initialConfig');
const showCommands = require('./commands/show-commands');
const configure = require('./commands/configure');
const makeFuncComp = require('./commands/make-func-comp');
const makeClassComp = require('./commands/make-class-comp');
const makeFuncCompWithRedux = require('./commands/make-func-comp-with-redux');
const makeClassCompWithRedux = require('./commands/make-func-comp-with-redux');
const makeHOCComp = require('./commands/make-hoc-comp');
const makeHOCCompWithRedux = require('./commands/make-hoc-comp-with-redux');

const argv = yargs(hideBin(process.argv)).argv;

(() => {
  const command = argv._[0];

  if (!commands.includes(command)) {
    console.log(error(`Command is not found. List of available comments:`));
    console.log(info(`${commands.join(', ')}`));

    return;
  }

  const fullConfig = {...initialConfig, ...config};
  const compDirPath = path.resolve(__dirname, fullConfig.compDirPath);

  switch (command) {
    case 'show-commands':
      showCommands();
      break;
    case 'configure':
      configure(argv);
      break;
    case 'make-func-comp':
      makeFuncComp(compDirPath, argv);
      break;
    case 'make-class-comp':
      makeClassComp(compDirPath, argv);
      break;
    case 'make-func-comp-with-redux':
      makeFuncCompWithRedux(compDirPath, argv);
      break;
    case 'make-class-comp-with-redux':
      makeClassCompWithRedux(compDirPath, argv);
      break;
    case 'make-hoc-comp':
      makeHOCComp(compDirPath, argv);
      break;
    case 'make-hoc-comp-with-redux':
      makeHOCCompWithRedux(compDirPath, argv);
      break;
  }
})();
