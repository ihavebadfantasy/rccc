const createComponent = require('../services/createComponent');

const makeFuncCompWithRedux = (compDirPath, args) => {
  const { dir, comp } = args;

  const fileTemplate = `import React from 'react';
import { connect } from 'react-redux';

const ${comp} = () => {
  return (
    <div>${comp}</div>
  );
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

module.exports = makeFuncCompWithRedux;
