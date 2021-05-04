const createComponent = require('../services/createComponent');

const makeClassComp = (compDirPath, args) => {
  const { dir, comp } = args;

  const fileTemplate = `import React from 'react';

class ${comp} extends React.Component {
  render() {
    return (
      <div>${comp}</div>
    );
  }
}

export default ${comp};
  `

  createComponent(dir, comp, fileTemplate, compDirPath);
};

module.exports = makeClassComp;
