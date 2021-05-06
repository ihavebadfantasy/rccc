const createComponent = require('../services/createComponent');

const makeHocCompWithRedux = (compDirPath, args) => {
  let { dir, comp } = args;

  if (!dir) {
    dir = 'HOC';
  }

  const fileTemplate = `import React from 'react';
import { connect } from 'react-redux';

const ${comp} = ChildComponent => {
  class ComposedComponent extends React.Component {
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  
  const mapStateToProps = state => {
    return {
    };
  }

  const mapDispatchToProps = {
  
  };

  return connect(mapStateToProps, mapDispatchToProps)(ComposedComponent);
};

export default ${comp};
  `

  createComponent(dir, comp, fileTemplate, compDirPath);
};

module.exports = makeHocCompWithRedux;
