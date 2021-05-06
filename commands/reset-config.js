const fs = require('fs');
const path = require('path');
const { success } = require('../chalk/index');

const resetConfig = () => {
  const configFilePath = path.join(process.cwd(), 'configuration.js');
  const fileTemplate = `module.exports = ${JSON.stringify({})}`
  fs.writeFileSync(configFilePath, fileTemplate);
  console.log(success('Config has been successfully reset to default values!'));
}

module.exports = resetConfig;
