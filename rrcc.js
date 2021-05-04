const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const commands = require('./commands');
const { error, info } = require('./chalk');
const configuration = require('./configuration');
const initialConfiguration = require('./initialConfiguration');
const showCommands = require('./commands/show-commands');
const config = require('./commands/config');
const makeFuncComp = require('./commands/make-func-comp');
const makeClassComp = require('./commands/make-class-comp');
const makeFuncCompWithRedux = require('./commands/make-func-comp-with-redux');
const makeClassCompWithRedux = require('./commands/make-func-comp-with-redux');
const makeHOCComp = require('./commands/make-hoc-comp');
const makeHOCCompWithRedux = require('./commands/make-hoc-comp-with-redux');
const makeSCSSFile = require('./commands/make-scss-file');
const makeContext = require('./commands/make-context');
const makeReduxReducer = require('./commands/make-redux-reducer');
const makeReduxMiddleware = require('./commands/make-redux-middleware');

const argv = yargs(hideBin(process.argv)).argv;

(() => {
  const command = argv._[0];

  if (!commands.includes(command)) {
    console.log(error(`Command is not found. List of available comments:`));
    console.log(info(`${commands.join(', ')}`));

    return;
  }

  const fullConfig = {...initialConfiguration, ...configuration};
  const compDirPath = path.resolve(__dirname, fullConfig.compDirPath);
  const stylesDirPath = path.resolve(__dirname, fullConfig.stylesDirPath);
  const contextDirPath = path.resolve(__dirname, fullConfig.contextDirPath);
  const reduxDirPath = path.resolve(__dirname, fullConfig.reduxDirPath);
  const middlewaresDirPath = path.resolve(__dirname, fullConfig.middlewaresDirPath);

  switch (command) {
    case 'show-commands':
      showCommands();
      break;
    case 'config':
      config(argv);
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
    case 'make-scss-file':
      makeSCSSFile(stylesDirPath, argv);
      break;
    case 'make-context':
      makeContext(contextDirPath, argv);
      break;
    case 'make-redux-reducer':
      makeReduxReducer(reduxDirPath, argv);
      break;
    case 'make-redux-middleware':
      makeReduxMiddleware(middlewaresDirPath, argv);
      break;
  }
})();
