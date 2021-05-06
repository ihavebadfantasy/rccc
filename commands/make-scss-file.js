const fs = require('fs');
const path = require('path');
const { error, warning, success } = require('../chalk/index');

const makeSCSSFile = (compDirPath, args) => {
  const { dir, name } = args;

  if (!name) {
    return console.log(warning('Please provide file name.'));
  }

  const compSubDirPath = dir ? path.resolve(compDirPath, dir) : compDirPath;

  if (!fs.existsSync(compSubDirPath)) {
    fs.mkdirSync(compSubDirPath);
  }

  const filename = name + '.scss';
  const componentPath = path.resolve(compSubDirPath, filename);

  if (fs.existsSync(componentPath)) {
    return console.log(error('File with such name already exists!'));
  }

  fs.writeFileSync(componentPath, '');
  console.log(success('File has been successfully created!'));
};

module.exports = makeSCSSFile;
