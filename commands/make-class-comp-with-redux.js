const createComponent = require('../services/createComponent');

const makeClassCompWithRedux = (compDirPath, args) => {
  const { dir, comp } = args;

  const fileTemplate = `import React from 'react';
import { connect } from 'react-redux';

class ${comp} extends React.Component {
  render() {
    return (
      <div>${comp}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
}

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(${comp});
  `

  createComponent(dir, comp, fileTemplate, compDirPath);
};

module.exports = makeClassCompWithRedux;
