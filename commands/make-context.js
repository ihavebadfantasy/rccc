const createComponent = require('../services/createComponent');

const makeContext = (compDirPath, args) => {
  const { dir, comp } = args;

  const fileTemplate = `import React from 'react'

const ${comp}Context = React.createContext({});

export const ${comp}Provider = ${comp}Context.Provider;

export default ${comp}Context;
  `

  createComponent(dir, comp, fileTemplate, compDirPath, 'Context');
};

module.exports = makeContext;
