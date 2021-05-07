const createComponent = require('../services/createComponent');

const makeReduxMiddleware = (compDirPath, args) => {
  const { dir, comp } = args;

  const fileTemplate = `const ${comp} = ({ dispatch }) => next => action => {
  
  }

export default ${comp};
  `

  createComponent(dir, comp, fileTemplate, compDirPath, 'Middleware');
};

module.exports = makeReduxMiddleware;
