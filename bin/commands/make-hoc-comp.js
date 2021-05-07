const createComponent = require('../services/createComponent');

const makeHocComp = (compDirPath, args) => {
  let { dir, comp } = args;

  if (!dir) {
    dir = 'HOC';
  }

  const fileTemplate = `import React from 'react';

const ${comp} = ChildComponent => {
  class ComposedComponent extends React.Component {
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return ComposedComponent;
};

export default ${comp};
  `

  createComponent(dir, comp, fileTemplate, compDirPath);
};

module.exports = makeHocComp;
