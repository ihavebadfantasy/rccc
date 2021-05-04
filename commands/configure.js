const fs = require('fs');
const path = require('path');
const config = require('../config');
const { success } = require('../chalk/index');

const configure = (args) => {
  const newConfig = Object.assign({}, config);

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

  const configFilePath = path.join(process.cwd(), 'config.js');
  const fileTemplate = `module.exports = ${JSON.stringify(newConfig)}`

  fs.writeFileSync(configFilePath, fileTemplate);
  console.log(success('Config has been successfully updated!'));
}

module.exports = configure;
