const fs = require('fs');
const path = require('path');
const configuration = require('../configuration');
const { success } = require('../chalk/index');

const config = (args) => {
  const newConfig = Object.assign({}, configuration);
  if (args.compDirPath) {
    newConfig.compDirPath = args.compDirPath;
  }

  if (args.stylesDirPath) {
    newConfig.compDirPath = args.compDirPath;
  }

  if (args.reduxDirPath) {
    newConfig.compDirPath = args.compDirPath;
  }

  if (args.middlewaresDirPath) {
    newConfig.compDirPath = args.compDirPath;
  }

  if (args.contextDirPath) {
    newConfig.contextDirPath = args.contextDirPath;
  }

  const configFilePath = path.join(process.cwd(), 'configuration.js');
  const fileTemplate = `module.exports = ${JSON.stringify(newConfig)}`
  fs.writeFileSync(configFilePath, fileTemplate);
  console.log(success('Config has been successfully updated!'));
}

module.exports = config;
