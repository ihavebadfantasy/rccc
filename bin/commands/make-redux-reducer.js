const createComponent = require('../services/createComponent');

const makeReduxReducer = (compDirPath, args) => {
  const { dir, comp } = args;

  const fileTemplate = `const ${comp}Reducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default ${comp}Reducer;
  `

  createComponent(dir, comp, fileTemplate, compDirPath, 'Reducer');
};

module.exports = makeReduxReducer;
