const createComponent = require('../services/createComponent');

const makeFuncComp = (compDirPath, args) => {
  const { dir, comp } = args;

  const fileTemplate = `import React from 'react';

const ${comp} = () => {
  return (
    <div>${comp}</div>
  );
}

export default ${comp};
  `

  createComponent(dir, comp, fileTemplate, compDirPath);
};

module.exports = makeFuncComp;

