const fs = require('fs');
const path = require('path');
const { error, warning, success } = require('../chalk');

const createComponent = (dir, comp, fileTemplate, compDirPath, compType = 'Component') => {
  if (!comp) {
    return console.log(warning(`Please provide ${compType} name.`));
  }

  const compSubDirPath = dir ? path.resolve(compDirPath, dir) : compDirPath;

  if (!fs.existsSync(compSubDirPath)) {
    fs.mkdirSync(compSubDirPath);
  }

  const filename = comp + '.js';
  const componentPath = path.resolve(compSubDirPath, filename);

  if (fs.existsSync(componentPath)) {
    return console.log(error(`${compType} with such name already exists!`));
  }

  fs.writeFileSync(componentPath, fileTemplate);
  console.log(success(`${compType} has been successfully created!`));
}

module.exports = createComponent;
